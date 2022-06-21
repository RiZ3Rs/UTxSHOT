import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-wikishot-carte',
  templateUrl: './wikishot-carte.component.html',
  styleUrls: ['./wikishot-carte.component.scss']
})
export class WikishotCarteComponent implements OnInit {

  @Input() produit! : Produit;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goOnDetail(){
    this.router.navigate(['/', 'modifProduit', this.produit.id]);
  }

}
