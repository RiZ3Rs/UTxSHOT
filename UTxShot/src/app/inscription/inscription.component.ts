import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  MDP1! : string;
  MDP2! : string;
  erreur : string = ''

  constructor( public firebaseService : FirebaseService,private userService :UserService,private route:Router) { 
    
  }


  ngOnInit(): void {
    this.user = new User('','','','','','')
  }

  inscription(){
    this.erreur = ''
    if(this.user.nom == ''){
      this.erreur = 'entrez un nom'
    }else if(this.user.prenom == ''){
      this.erreur = 'entrez un prenom'
    }else if(this.user.pseudo == ''){
      this.erreur = 'entrez un pseudo'
    }else if(this.user.email == ''){
      this.erreur = 'entrez un email'
    }else if(this.MDP1 == ''){
      this.erreur = 'entrez un mot de passe'
    }else if(this.MDP1.length < 6){
      this.erreur = 'mot de passe trop court'
    }else if(this.MDP2 == ''){
      this.erreur = 'ressaisir le mot de passe'
    }else{
      if(this.MDP1 != this.MDP2){
        this.erreur = 'mot de passe différents'
      }else{
        this.onSignup(this.user.email,this.MDP1)
      }
    }
  }
  
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password).catch( res =>{
      this.erreur = res.message;
    })
      if(this.firebaseService.isLoggedIn){
        
        this.isSignIn = true
        this.user.userID =  this.firebaseService.getUserID()
        this.userService.createUser(this.user)
        this.route.navigate([''])
      }
  }


}
