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

  constructor(service: ArticleService,private router : ActivatedRoute) { 
    this.article = service.getProduct(parseInt(this.router.snapshot.paramMap.get('id') || '0'))
  }

  ngOnInit(): void {
    
  }

  otherImage(nb :number){
    if(this.article.image[nb] == null){
      return false;
    }else{
      return true;
    }
  }

  nbImage() : number{
    return this.article.image.length
    
  }


}
