import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({providedIn: 'root'})
export class ArticleService {produitCollection!: AngularFirestoreCollection<Article>;
  produits : Observable<Article[]>;

  constructor( public afs : AngularFirestore, private storage : AngularFireStorage) { 
    this.produitCollection = this.afs.collection('Articles')
    // this.test = this.produitCollection.valueChanges();
    this.produits = this.produitCollection.snapshotChanges().pipe(map((changes: any[]) => {
      return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
         const data = a.payload.doc.data() as Article;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  getProductByBDDId(id : string){
    return this.produitCollection.doc(id).get()
  }

  getProduit(){
    this.produits = this.produitCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as Article;
         data.id = a.payload.doc.id;
         return data;
      });
    }));
    return this.produits
  }

  getProduitbyInfo(info : string | undefined){
    this.produits = this.produits.pipe(map((produits : Article[]) =>
      produits.filter((unProduit : Article) => unProduit.titre === info )))
      return this.produits
  }

  getProduitbyId(id: string | undefined){
    this.produits = this.produits.pipe(map((produits : Article[]) =>
      produits.filter((unProduit : Article) => unProduit.id === id )))
      return this.produits
  }
  async ArticleExistAs(info : string | undefined){
    return new Promise((resolve ,reject)=>{
      this.getProduitbyInfo(info).subscribe((produits: string | any[]) => {
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
  addArticle(article : Article, fileToAdd : File, fileToAdd2? : File, fileToAdd3? : File){
    let ImageUrl1: string | null
    let ImageUrl2: string | null
    let ImageUrl3: string | null
    const Id = this.afs.createId();
    this.storage.upload('/Article/'+Id+'/IMG1:', fileToAdd).then((res: any) =>{
        this.storage.ref('/Article/'+Id+'/IMG1:').getDownloadURL().subscribe((res: string) =>{
        ImageUrl1 = res
        console.log('ici')
        if( ImageUrl1 == null){
          ImageUrl1 = ''
        }
        if(fileToAdd2 != null){
          this.storage.upload('/Article/'+Id+'/IMG2:', fileToAdd2).then((res: any) =>{
            this.storage.ref('/Article/'+Id+'/IMG2:').getDownloadURL().subscribe((res: string) =>{
            ImageUrl2 = res
              if( ImageUrl2 == null){
                ImageUrl2 = ''
              }
              if(fileToAdd3 != null){
                this.storage.upload('/Article/'+Id+'/IMG3:', fileToAdd3).then((res: any) =>{
                  this.storage.ref('/Article/'+Id+'/IMG3:').getDownloadURL().subscribe((res: string) =>{
                  ImageUrl3 = res
                    if( ImageUrl3 == null){
                      ImageUrl3 = ''
                    }
                    this.afs.collection('Articles').doc(Id).set({ 
                      produit : article.produit,
                      titre : article.titre,
                      stock : article.stock,
                      custom : article.custom,
                      vendeurId : article.vendeurId,
                      munitionSupp : article.munitionSupp,
                      etat : article.etat,
                      prix : article.prix,
                      image1 : ImageUrl1,
                      image2 : ImageUrl2,
                      image3 : ImageUrl3
                    })
                  })
                })
              }else{
                ImageUrl3 = ''
                this.afs.collection('Articles').doc(Id).set({ 
                  produit : article.produit,
                  titre : article.titre,
                  stock : article.stock,
                  custom : article.custom,
                  vendeurId : article.vendeurId,
                  munitionSupp : article.munitionSupp,
                  etat : article.etat,
                  prix : article.prix,
                  image1 : ImageUrl1,
                  image2 : ImageUrl2,
                  image3 : ImageUrl3
                })
              }
            })
          })
        }else{
          ImageUrl2 = ''
          ImageUrl3 = ''
          this.afs.collection('Articles').doc(Id).set({ 
            produit : article.produit,
            titre : article.titre,
            stock : article.stock,
            custom : article.custom,
            vendeurId : article.vendeurId,
            munitionSupp : article.munitionSupp,
            etat : article.etat,
            prix : article.prix,
            image1 : ImageUrl1,
            image2 : ImageUrl2,
            image3 : ImageUrl3
          })
        }
        
     })
    })
   return Id
  } 
}