import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRef: AngularFirestoreCollection<User>;
  userDoc!: AngularFirestoreDocument<User>;
  user : Observable<User[]>;

  // constructor(private userSigned : User ,private db: AngularFirestore) {
  //   this.userRef = db.collection(this.dbPath);
  // }
  constructor(public afs: AngularFirestore) {
    this.userRef = this.afs.collection('User');
    this.user = this.userRef.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as User;
         data.bddId = a.payload.doc.id;
         return data;
      });
    }));
  }

  getUsers(): Observable<User[]>{
    return this.user
  }

  getUserById2(id : string){
    return this.getUsers().pipe(map((users : User[]) =>
    users.filter((user : User) => user.userID === id)))
  }

  getUserById(id : string){
    return this.getUsers().pipe(map((users : User[]) =>
        users.filter((user : User) => user.userID === id)))
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

/* updateUserPrenom(_id:any, prenom:string) {
  this.afs.doc(`User/${_id}`).update({prenom:prenom});
 }

 updateUserNom(_id:any, nom:string) {
  this.afs.doc(`User/${_id}`).update({nom:nom});
 }*/

 updateUser(user: User){
  this.userDoc = this.afs.doc('/User/'+user.bddId);
  this.userDoc.update({
    nom : user.nom,
    prenom : user.prenom,
    email : user.email,
    pseudo : user.pseudo
  });
 }

}
