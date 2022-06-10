import { User } from "./user.model";

export class Article {
    id : number;
    titre: string;
    createdDate: Date;
    image: string[];
    //vendeur : User;

    taille :number;
    puissance : number;
    viseur : boolean;
    cap_chargeur : number;
    etat : string;
    custom : boolean;
    munitions : number;
    prix : number;
    
    constructor(id : number, title: string , createdDate: Date, /*user : User,*/taille : number, puissance : number,viseur : boolean,cap_chargeur : number,etat : string,custom : boolean,munitions : number,prix : number, image1: string[]) {
        this.id = id; 
        this.titre = title;
        this.image = image1;
        this.createdDate = createdDate;
        //this.vendeur = user;
        this.taille = taille;
        this.puissance = puissance;
        this.viseur = viseur;
        this.cap_chargeur = cap_chargeur;
        this.etat = etat;
        this.custom = custom;
        this.munitions = munitions;
        this.prix = prix;
    }
  }