import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/User';
  userRef: AngularFirestoreCollection<User>;

  // constructor(private userSigned : User ,private db: AngularFirestore) {
  //   this.userRef = db.collection(this.dbPath);
  // }
  constructor(private db: AngularFirestore) {
    this.userRef = db.collection(this.dbPath);
  }

  create( user: User): any {
   return this.db.collection("User").add(user);
  }

}
