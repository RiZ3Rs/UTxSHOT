import { Produit } from './../models/produit.model';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  produit! : Produit[];
  modif : boolean = false;
  productId!:string;
  constructor(private service: ProduitService,private router : ActivatedRoute) { 
    this.productId = router.snapshot.paramMap.get('id') || '0'
    service.getProduitbyId(this.productId).subscribe(selectedProduct =>{
      this.produit = selectedProduct;
    })
  }
  

  ngOnInit(): void {}

  updateObject(){
    this.service.updateProduct(this.produit[0])
  }

}
