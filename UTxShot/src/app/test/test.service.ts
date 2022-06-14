import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
   testCollection!: AngularFirestoreCollection<Test>;
   test : Observable<any[]>;

  constructor( public afs : AngularFirestore) { 
    this.test = this.afs.collection('Test').valueChanges();
  }

  getTests(){
    return this.test
  }
}
