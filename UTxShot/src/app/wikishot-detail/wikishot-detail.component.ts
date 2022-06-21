import { Produit } from './../models/produit.model';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-wikishot-detail',
  templateUrl: './wikishot-detail.component.html',
  styleUrls: ['./wikishot-detail.component.scss']
})
export class WikishotDetailComponent implements OnInit {
  produit! : Produit[];
  modif : boolean = false;
  productId!:string;
  constructor(public router : Router,public firebaseService: FirebaseService,private service: ProduitService,private router1 : ActivatedRoute) { 
    this.productId = router1.snapshot.paramMap.get('id') || '0'
    service.getProduitbyId(this.productId).subscribe(selectedProduct =>{
      this.produit = selectedProduct;
    })
  }
  

  ngOnInit(): void {}
  detailProduct(){
    this.router.navigate(['/', 'wikishot-detail', this.firebaseService.getUserID()]);
  }

}
