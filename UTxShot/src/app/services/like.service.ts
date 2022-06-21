import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { promises } from 'dns';
import { map, Observable } from 'rxjs';
import { Likes } from '../models/like.model';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  likesCollection!: AngularFirestoreCollection<Likes>;
  likes : Observable<Likes[]>;

  constructor( public afs : AngularFirestore, private storage : AngularFireStorage) { 
    this.likesCollection = this.afs.collection('Likes')
    // this.test = this.produitCollection.valueChanges();
    this.likes = this.likesCollection.snapshotChanges().pipe(map((changes: any[]) => {
      return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
         const data = a.payload.doc.data() as Likes;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  getLikeByBDDId(userId : string){
    return this.likesCollection.doc(userId).get()
  }

  async articleLiked(userId : string, articleId :string) : Promise<boolean>{
    return new Promise((resolve ,reject)=>{
    this.likesCollection.doc(userId).get().subscribe( res =>{
      let ret = false
      res.data()?.ProductLIked.forEach(element => {
        if(element == articleId){
          ret = true
        }
      })

      resolve(ret)
    })
    })
  }


  updateLikes(likes : Likes){
    this.afs.collection('Likes').doc(likes.id).set({ 
      ProductLIked : likes.ProductLIked
    })
  }

  deleteLike(likes :Likes){
    this.afs.collection('Likes').doc(likes.id).update({ 
      ProductLIked : likes.ProductLIked
    })
  }
}
