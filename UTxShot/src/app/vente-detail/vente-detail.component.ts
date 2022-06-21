import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { Likes } from '../models/like.model';
import { Produit } from '../models/produit.model';
import { User } from '../models/user.model';
import { ArticleService } from '../services/article.service';
import { FirebaseService } from '../services/firebase.service';
import { LikeService } from '../services/like.service';
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
  likes! : Likes;
  user! : User[];
  currentUser! : string;
  modif : boolean = false;
  isLiked : boolean = false;
  articleId! : string

  constructor(private service: ArticleService, private produitService : ProduitService, private userService : UserService, private router : ActivatedRoute, public firebaseService: FirebaseService, private route : Router, private likeService : LikeService) { 
      this.currentUser = firebaseService.getUserID()

  }

  ngOnInit(): void {
    this.articleId = this.router.snapshot.paramMap.get('id') || '0'
     this.service.getProductByBDDId(this.articleId).subscribe(async res => {
      this.article = res.data() || new Article()
      this.produitService.getProductByBDDId(this.article.produit).subscribe(res =>{
        this.produit = res.data() || new Produit()
      })
      this.userService.getUserById(this.article.vendeurId).subscribe(res =>{
        this.user = res
      })

      this.likeService.getLikeByBDDId(this.currentUser).subscribe(res =>{
        this.likes = res.data() || new Likes()
      })

      this.isLiked =  await this.likeService.articleLiked(this.currentUser,this.articleId) 

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
      if(this.likes.id == null || this.likes. id == ''){
        this.likes.id = this.currentUser
      }
      this.likes.ProductLIked.push(this.articleId)
      console.log(this.likes)
      this.likeService.updateLikes(this.likes)
    }else{
      this.isLiked = false;
      let i = 0
      let index :number = 0

      this.likes.ProductLIked.forEach(element => {
        if(element == this.articleId){
          index = i
        }
        i += 1
      });
      console.log('before :'+this.likes.ProductLIked)
      const index2 = this.likes.ProductLIked.indexOf(index.toString(), 0);
        if (index > -1) {
          this.likes.ProductLIked.splice(index, 1);
      }
      if(this.likes.id == null || this.likes. id == ''){
        this.likes.id = this.currentUser
      }
      console.log('after :'+this.likes.ProductLIked)
      this.likeService.deleteLike(this.likes)
    }
  }

  updateArticle(){
    this.article.id = this.articleId
    this.service.updateArticle(this.article)
    this.modif = false
  }

  DeleteArticle(){
    this.article.id = this.articleId
    this.service.deleteArticle(this.article)
    this.route.navigate([''])
  }


}
