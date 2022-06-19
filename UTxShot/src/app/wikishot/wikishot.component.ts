import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Produit } from '../models/produit.model';
import { ArticleService } from '../services/article.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-wikishot',
  templateUrl: './wikishot.component.html',
  styleUrls: ['./wikishot.component.scss']
})
export class WikishotComponent implements OnInit {

  produits : Produit[] = []

  constructor(private produitService: ProduitService) {
    
  }

  ngOnInit(): void {
    this.produitService.getProduit().subscribe(res => {
      this.produits = res;
    })
  }

}
