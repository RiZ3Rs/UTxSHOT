import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { Produit } from '../models/produit.model';
import { FirebaseService } from '../services/firebase.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-wikishot-carte',
  templateUrl: './wikishot-carte.component.html',
  styleUrls: ['./wikishot-carte.component.scss']
})
export class WikishotCarteComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() produit! : Produit;
  }
  

  // goOnDetail(){
  //   this.router.navigate(['/', 'article', this.article.id]);
  // }


