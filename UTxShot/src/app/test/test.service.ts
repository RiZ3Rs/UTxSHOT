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

  constructor( public afs : AngularFirestore) { 
    this.testCollection = this.afs.collection('Test')
    this.test = this.testCollection.valueChanges();
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

  addTest(test : Test){
    this.afs.collection('Test').add({ 
      userID : test.id,
      title : test.title,
      description : test.description
  })
  }
}
