import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRef: AngularFirestoreCollection<User>;

  // constructor(private userSigned : User ,private db: AngularFirestore) {
  //   this.userRef = db.collection(this.dbPath);
  // }
  constructor(private afs: AngularFirestore) {
    this.userRef = afs.collection('User');
  }

  getUsers(): Observable<User[]>{
    return this.afs.collection<User>('User').valueChanges()
  }

  createUser(user : User){
    let verif = false;
    this.afs.collection<User>('User').valueChanges().subscribe(res =>{
      for (let i = 0; i < res.length; i++) {
        if(res[i].userID == user.userID ){
          verif = true
        }
      }
      console.log(verif)
      if( verif == false){
        this.afs.collection('User').add({ 
          userID : user.userID,
          email : user.email,
          nom : user.nom,
          prenom : user.prenom,
          pseudo : user.pseudo,
          image_profil : user.image_profil,
          pro : user.pro,
          note : user.note
         })
      }
    } )
   
 }

}
