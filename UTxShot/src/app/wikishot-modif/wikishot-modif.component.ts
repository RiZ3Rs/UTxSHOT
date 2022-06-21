import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-wikishot-modif',
  templateUrl: './wikishot-modif.component.html',
  styleUrls: ['./wikishot-modif.component.scss']
})
export class WikishotModifComponent implements OnInit {
  produit : Produit = new Produit()
  produitId! : string;
  erreur : string = ''

  constructor(private produitService : ProduitService, private router : ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.produitId = this.router.snapshot.paramMap.get('id') || '0'
    this.produitService.getProductByBDDId(this.produitId).subscribe(res =>{
      this.produit = res.data() || new Produit()

    })
  }

  updateProduct(){
    this.produit.id = this.produitId
    this.produitService.updateProduit(this.produit)
  }

  DeleteProduct(){
    this.produit.id = this.produitId
    this.produitService.deleteProduit(this.produit)
    this.route.navigate([''])
  }

}
