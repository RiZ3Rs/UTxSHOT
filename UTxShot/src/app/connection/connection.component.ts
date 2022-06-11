import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  isSignIn = false;
  constructor( public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignIn = true;
    }else{
      this.isSignIn = false;
    }
  }
  
  async onSignup( email : string , password : string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignIn = true;
    }
  }

  async onSignin( email : string , password : string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignIn = true;
    }
  }

  handleLogout(){
    
  }

}
