export class User {
    [x: string]: any;
    pro : boolean = false;
    note : number = 0;
    bddId?: string 
    
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