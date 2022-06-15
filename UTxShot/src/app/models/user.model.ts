export class User {
    pro : boolean = false;
    note : number = 0; 
    
    constructor(
        public email:string,
        public nom: string, 
        public prenom :string, 
        public pseudo : string, 
        public image_profil : string,
        public userID : string, 
        ) {
        
    }
  }