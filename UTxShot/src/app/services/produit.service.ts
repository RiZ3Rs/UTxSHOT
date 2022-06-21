import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produitCollection!: AngularFirestoreCollection<Produit>;
  produits : Observable<Produit[]>;

  constructor( public afs : AngularFirestore, private storage : AngularFireStorage) { 
    this.produitCollection = this.afs.collection('Produits')
    // this.test = this.produitCollection.valueChanges();
    this.produits = this.produitCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as Produit;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  getProduit(){
    this.produits = this.produitCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as Produit;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
    return this.produits
  }

  getProductByBDDId(id : string | undefined){
    return this.produitCollection.doc(id).get()
  }

  getProduitbyInfo(info : string | undefined){
    this.produits = this.produits.pipe(map((produits : Produit[]) =>
      produits.filter((unProduit : Produit) => unProduit.nom_produit === info )))
      return this.produits
  }

  async productExistAs(info : string | undefined){
    return new Promise((resolve ,reject)=>{
      this.getProduitbyInfo(info).subscribe(produits => {
        console.log(produits);
        console.log(produits.length);
        if (produits.length == 0) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
    });
    
  }

  // productExist(info : string | undefined){
  //   let mypromise = function functionOne(produitsObs: Observable<Produit[]>){
  //     console.log("Entered function");
  //     return new Promise((resolve ,reject)=>{
  //           produitsObs.subscribe(produits => {
  //             console.log(produits);
  //             console.log(produits.length);
  //             if (produits.length == 0) {
  //               resolve(true)
  //             } else {
  //               resolve(false)
  //             }
  //             console.log('milieu')
  //           })    
  //     });
  // };
  
  //  mypromise(this.getProduitbyInfo(info)).then((res)=>{
  //     console.log('resultat :'+res)
  //     return res
  // }).catch((error)=>{
  //     console.log(`Handling error as we received ${error}`);
  // });
  // }

  addProduit(produit : Produit, fileToAdd : File){
    let ImageUrl
    const Id = this.afs.createId();
    console.log(Id)
    this.storage.upload('/Produits/produit:'+Id, fileToAdd).then(res =>{
      this.storage.ref('/Produits/produit:'+Id).getDownloadURL().subscribe(res =>{
        ImageUrl = res
        console.log('recherche resultat:'+res)
        if( ImageUrl == null){
          ImageUrl = ''
        }
        this.afs.collection('Produits').doc(Id).set({ 
          nom_produit : produit.nom_produit,
          description : produit.description,
          vitesse : produit.vitesse,
          taille : produit.taille,
          capacite_chargeur : produit.capacite_chargeur,
          note_produit : 0,
          temps_recharge : produit.temps_recharge,
          precision : produit.precision,
          imageUrl :  ImageUrl
        })
     })
    })
    
   return Id
  } 

  updateProduit(prod: Produit){
    let produitToUpdate = this.afs.doc('/Produits/'+prod.id);
    produitToUpdate.update({
      description : prod.description,
      vitesse : prod.vitesse,
      taille : prod.taille,
      capacite_chargeur : prod.capacite_chargeur,
      temps_recharge : prod.temps_recharge,
      precision : prod.precision
  });
  }

  deleteProduit(prod: Produit){
    let produitToUpdate = this.afs.doc('/Produits/'+prod.id);
    produitToUpdate.delete();
  }
}
