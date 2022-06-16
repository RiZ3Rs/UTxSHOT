import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
   testCollection!: AngularFirestoreCollection<Test>;
   test : Observable<Test[]>;
   testDoc!: AngularFirestoreDocument<Test>;

  constructor( public afs : AngularFirestore) { 
    this.testCollection = this.afs.collection('Test')
    // this.test = this.testCollection.valueChanges();
    this.test = this.testCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as Test;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  getTests(){
    return this.test
  }

  getTestbyInfo(info : string){
    this.test = this.getTests().pipe(map((tests : Test[]) =>
      tests.filter((unTests : Test) => unTests.title === info)
       )
      )
      return this.test
  }

  getTestbyId(id : string){
    this.test = this.getTests().pipe(map((tests : Test[]) =>
      tests.filter((unTests : Test) => unTests.id === id)
       )
      )
    return this.test
  }

  addTest(test : Test){
    this.afs.collection('Test').add({ 
      title : test.title,
      description : test.description
  })
  }

  deleteTest(test: Test){
    this.testDoc = this.afs.doc(`Test/${test.id}`);
    this.testDoc.delete();
  }

  updateTest(test: Test){
    console.log('/Test/'+test.id)
    this.testDoc = this.afs.doc('/Test/'+test.id);
    this.testDoc.update({
      title : test.title,
      description : test.description
  });
  }


}
