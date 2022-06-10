export class User {
    nom : string;
    prenom :string;
    pseudo : string;
    image_profil : string;
    id : string;
    mdp :string;
    date_naissance: Date;
    note_vendeur : number;
    
    constructor(nom : string, prenom :string, pseudo : string, image_profil : string, id : string, mdp :string, date_naissance: Date, note_vendeur : number) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.image_profil = image_profil;
        this.id =id ;
        this.mdp = mdp;
        this.date_naissance = date_naissance;
        this.note_vendeur = note_vendeur;
    }
  }