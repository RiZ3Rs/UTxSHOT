import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Produit } from 'src/app/models/produit.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.scss']
})
export class ProduitFormComponent implements OnInit {
  produit : Produit = new Produit()
  vendeurId : string;
  erreur: string = ''
  imageProduit! : File

  constructor(private router : ActivatedRoute,private firebaseService : FirebaseService, private produitService : ProduitService) { 
    this.vendeurId = this.firebaseService.getUserID()
    this.produit.note_produit = 0;
  }

  ngOnInit(): void {

  }

  addFile(event :any){
    this.imageProduit = event.target.files[0]
    console.log(this.imageProduit)
  }

  async addProduct(){
    this.erreur =  this.produit.isCompleted()
    if(this.erreur == 'ok'){
      if(this.imageProduit != null){
        let test
        await this.produitService.productExistAs(this.produit.nom_produit).then((res)=>{
          test = res
        })
        if(!test){
          console.log('do')
          this.produitService.addProduit(this.produit, this.imageProduit )
          this.erreur = ''
        }else{
          this.erreur = 'Le produit existe déjà'
        }
      }else{
        this.erreur = 'Selectionnez une image'
      }
    }
  }
  

}
