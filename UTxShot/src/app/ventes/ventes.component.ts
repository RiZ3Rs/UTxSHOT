import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnInit {
  ArticleArray : Article[] = []

  constructor(private articleService: ArticleService) {
    // this.ArticleArray = service.getProducts()
  }

  ngOnInit(): void {
    this.articleService.getProduit().subscribe(res =>{
      this.ArticleArray = res
    })
    console.log(this.ArticleArray)
  }

  priceFilter(min : number , max : number){
    this.articleService.filterByprice(min,max).subscribe(res =>{
      this.ArticleArray = res
    })

  }

  customFilter(val : boolean){
    this.articleService.filterByCustom(val).subscribe(res =>{
      this.ArticleArray = res
    })

  }
  etatFilter(val : string){
    this.articleService.filterByEtat(val).subscribe(res =>{
      this.ArticleArray = res
    })

  }

  resetFilter(){
    location.reload()
  }
}
