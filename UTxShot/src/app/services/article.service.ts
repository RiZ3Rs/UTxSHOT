import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  Array : Article[] = []

  constructor() { }

  getProducts() : Article[]{
    this.Array = [];
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(1,
                    "x-shot sniper",
                    new Date(),
                    /*new User(),*/
                    80,
                    20,
                    true,
                    10,
                    "correct",
                    true,
                    48,
                    14.98,
                    ["../../assets/files/img/81W19bSDF2S._AC_SL1500_.jpg","../../assets/files/img/images.jpg","../../assets/files/img/F886898A_1.jpg","../../assets/files/img/GUEST_28b8b087-a318-47c7-8c1a-cfd5ade93de6.jpg"]
                  ))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    this.Array.push(new Article(0,"x-shot bateuse",new Date(),/*new Vendeur(),*/60,14,false,32,"correct",false,48,32.52,["../../assets/files/img/logo_UTxShot1.png","../../assets/files/img/logo_UTxShot2.png"]))
    return this.Array
  }

  getProduct (id : number): Article{
    return this.Array[id]
  }
}
