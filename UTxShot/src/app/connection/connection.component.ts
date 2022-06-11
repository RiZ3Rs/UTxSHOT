import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  isSignedIn = false
  constructor( public firebaseService : FirebaseService) { }
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password);
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    location.reload();
  }

}
