import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Produit } from 'src/app/models/produit.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.scss']
})
export class ProduitFormComponent implements OnInit {
  produit : Produit = new Produit()
  vendeurId : string;

  constructor(private router : ActivatedRoute,private firebaseService : FirebaseService) { 
    this.vendeurId = this.firebaseService.getUserID()
    this.produit.note_produit = 0;
  }

  ngOnInit(): void {

  }

  noterProduit(note : number){
    this.produit.note_produit = note;
  }

}
