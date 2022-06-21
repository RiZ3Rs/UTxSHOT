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
  detailProduct(){
    this.router.navigate(['/', 'wikishot-detail', this.firebaseService.getUserID()]);
  }

  @Input() produit! : Produit;
  produit1! : Produit[];
  modif : boolean = false;
  productId!:string;
  constructor(public router : Router,public firebaseService: FirebaseService,private service: ProduitService,private router1 : ActivatedRoute) { 
    this.productId = router1.snapshot.paramMap.get('id') || '0'
    service.getProduitbyId(this.productId).subscribe(selectedProduct =>{
      this.produit1 = selectedProduct;
    })
  }}
  

  // goOnDetail(){
  //   this.router.navigate(['/', 'article', this.article.id]);
  // }


