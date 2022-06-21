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
  constructor(public router : Router,public firebaseService: FirebaseService,private service: ProduitService,private router1 : ActivatedRoute) { 
  }
  

  ngOnInit(): void {}

}
