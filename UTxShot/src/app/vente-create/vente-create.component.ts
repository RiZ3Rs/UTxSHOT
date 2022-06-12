import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
// import {addDoc,collection} from '@angular/fire/firestore';


@Component({
  selector: 'app-vente-create',
  templateUrl: './vente-create.component.html',
  styleUrls: ['./vente-create.component.scss']
})
export class VenteCreateComponent implements OnInit {

  constructor(public firestore: AngularFirestore) { }

  // addArticle(value:any){
  //   const dbInstance = collection(this.firestore, 'articles');
  //   addDoc(dbInstance, value).then(()=> {
  //     alert('Article ajouté')
  //   }).catch((err)=> {
  //     alert(err.message)
  //   })
  // }

  ngOnInit(): void {
  }

}
