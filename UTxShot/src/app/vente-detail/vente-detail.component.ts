import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { Produit } from '../models/produit.model';
import { User } from '../models/user.model';
import { ArticleService } from '../services/article.service';
import { ProduitService } from '../services/produit.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vente-detail',
  templateUrl: './vente-detail.component.html',
  styleUrls: ['./vente-detail.component.scss']
})
export class VenteDetailComponent implements OnInit {
  article! : Article ;
  produit! : Produit;
  user! : User[];
  modif : boolean = false;
  isLiked : boolean = false;
  articleId! : string

  constructor(private service: ArticleService, private produitService : ProduitService, private userService : UserService, private router : ActivatedRoute) { 
    

  }

  ngOnInit(): void {
    this.articleId = this.router.snapshot.paramMap.get('id') || '0'
     this.service.getProductByBDDId(this.articleId).subscribe(res => {
      this.article = res.data() || new Article()
      this.produitService.getProductByBDDId(this.article.produit).subscribe(res =>{
        this.produit = res.data() || new Produit()
      })
      this.userService.getUserById(this.article.vendeurId).subscribe(res =>{
        this.user = res
      })

      console.log(this.produit)
    })
  }

  otherImage(nb :number){
    if(nb == 0){
      if(this.article.image1 == ''){
        return false;
      }else{
        return true;
      }
    }else if(nb == 1){
      if(this.article.image2 == ''){
        return false;
      }else{
        return true;
      }
    }else if(nb == 1){
      if(this.article.image3 == ''){
        return false;
      }else{
        return true;
      }
    }else{
      return false
    }
    
  }

  nbImage() : number{

    let nb = 0
    if(this.article.image1  != ''){
      nb +=1
    }
    if(this.article.image2  != ''){
      nb +=1
    }
    if(this.article.image3  != ''){
      nb +=1
    }
    return nb
    
  }

  modifVente(){
    if(this.modif == false){
      this.modif = true;
    }else{
      this.modif = false;
    }
  }

  like(){
    if(this.isLiked == false){
      this.isLiked = true;
    }else{
      this.isLiked = false;
    }
  }


}
