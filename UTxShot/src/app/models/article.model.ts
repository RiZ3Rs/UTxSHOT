import { User } from "./user.model";

export class Article {
    id : string = ''
    produit : string ='';
    titre ?: string;
    stock ?: string;
    custom : boolean  = false;
    vendeurId  : string = ''
    munitionSupp? : number;
    etat : string = '';
    prix : number = 0;
    image1? : string;
    image2? : string;
    image3? : string; 

    constructor() {
    }

    isCompleted():string{
        if(this.titre == null){
            return 'Entrez le titre de la vente'
        }else if(this.custom == null){
            return 'selectionner la customisation'
        }else if(this.stock == null){
            return 'entrer le nombre de produit à vendre'
        }else if(this.munitionSupp == null){
            return 'Entrez le nombre de munitions supplémentires'
        }else if(this.etat == null || this.etat == ''){
            return "Selectionner l'état du produit"
        }else if(this.prix == null || this.prix == 0){
            return 'Entrez le prix'
        }else if(this.produit == null || this.produit == ''){
            return 'Entrez le produit à vendre'
        }else{
            return 'ok'
        }        
    }
  }