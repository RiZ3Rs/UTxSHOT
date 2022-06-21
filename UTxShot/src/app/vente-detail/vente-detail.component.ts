import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-vente-detail',
  templateUrl: './vente-detail.component.html',
  styleUrls: ['./vente-detail.component.scss']
})
export class VenteDetailComponent implements OnInit {
  article! : Article;
  modif : boolean = false;
  isLiked : boolean = false;

  constructor(service: ArticleService,private router : ActivatedRoute) { 
    // this.article = service.getProduct(parseInt(this.router.snapshot.paramMap.get('id') || '0'))
  }

  ngOnInit(): void {
    
  }

  otherImage(nb :number){
    if(this.article.image1 == null){
      return false;
    }else{
      return true;
    }
  }

  nbImage() : number{
    // return this.article.image1.length
    return 1
    
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
