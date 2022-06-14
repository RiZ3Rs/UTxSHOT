import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  user !:User;
  isSignIn = false;

  constructor( public firebaseService : FirebaseService,private service :UserService) { 
    this.user = new User('nom','prenom','pseudo','image','id','mot passe',new Date(),2)
  }


  ngOnInit(): void {
    
  }
  
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignIn = true
    this.service.create(this.user)
  }


}
