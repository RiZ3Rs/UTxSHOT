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
}
