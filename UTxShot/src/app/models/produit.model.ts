export class Produit {
    id?:string;
    nom_produit?:string;
    description? : string;
    vitesse? : number;
    taille? : number;
    capacite_chargeur? : number;
    note_produit : number =0;
    temps_recharge? : number;
    precision? : number;
    imageUrl? : String ;

    constructor(){
    }

    isCompleted():string{
        if(this.nom_produit == null){
            return 'Entrez le nom du produit'
        }else if(this.description == null){
            return 'Entrez la description du produit'
        }else if(this.vitesse == null){
            return 'Entrez la puissance du produit'
        }else if(this.taille == null){
            return 'Entrez la taille du produit'
        }else if(this.capacite_chargeur == null){
            return 'Entrez la capacité du chargeur'
        }else if(this.temps_recharge == null){
            return 'Entrez le temps pour recharger'
        }else if(this.precision == null){
            return 'Entrez le pourcentage de précision'
        }else{
            return 'ok'
        }        
    }

}
