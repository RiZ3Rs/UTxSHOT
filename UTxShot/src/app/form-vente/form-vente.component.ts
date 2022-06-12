import { Component, OnInit } from '@angular/core';
import {addDoc,Firestore,collection} from '@angular/fire/firestore';
@Component({
  selector: 'app-form-vente',
  templateUrl: './form-vente.component.html',
  styleUrls: ['./form-vente.component.scss']
})
export class FormVenteComponent implements OnInit {

  constructor(public firestore: Firestore) { }

  addArticle(value:any){
    const dbInstance = collection(this.firestore, 'articles');
    addDoc(dbInstance, value).then(()=> {
      alert('Article ajouté')
    }).catch((err)=> {
      alert(err.message)
    })
  }

  ngOnInit(): void {
  }

}
