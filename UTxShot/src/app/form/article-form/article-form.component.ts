import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Produit } from 'src/app/models/produit.model';
import { ArticleService } from 'src/app/services/article.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  produits ! : Produit[]
  article : Article = new Article()
  vendeurId : string;
  erreur: string = ''
  imageArticle? : File
  imageArticle2? : File
  imageArticle3? : File
  nbImage : number = 0

  constructor(private router : ActivatedRoute,private firebaseService : FirebaseService, private produitService : ProduitService, private articleService : ArticleService) { 
    this.vendeurId = this.firebaseService.getUserID()
    this.produitService.getProduit().subscribe(toutProduits =>{
      this.produits = toutProduits
    })
  }

  ngOnInit(): void {

  }


  addFile(event :any, index :number){
    if(index == 0){
      this.imageArticle = event.target.files[0]
      if(this.nbImage < 1){
        this.nbImage = 1
      }
      console.log(this.imageArticle)
    }if(index == 1){
      this.imageArticle2 = event.target.files[0]
      if(this.nbImage < 2){
        this.nbImage = 2
      }
      console.log(this.imageArticle)
    }if(index == 2){
      this.imageArticle3 = event.target.files[0]
      if(this.nbImage < 3){
        this.nbImage = 3
      }
      console.log(this.imageArticle)
    }
  }

  async addProduct(){
    this.erreur =  this.article.isCompleted()
    if(this.erreur == 'ok'){
      if(this.imageArticle != null){
        this.article.vendeurId = this.vendeurId
        this.articleService.addArticle(this.article, this.imageArticle, this.imageArticle2, this.imageArticle3)
        this.erreur = ''
      }else{
        this.erreur = 'Selectionnez une image'
      }
    }
  }

  findProductId(name : string | undefined){
    let ret :string | undefined
    this.produits.forEach(element => {
      if(element.nom_produit == name){
        ret = element.id
      }
    });
    return ret
  }

}
