import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false
  darkTheme : boolean;
  imageDeProfilURL : string = '';
  comptePro : boolean = false;
  @Output() isLogout = new EventEmitter<void>()
  
  constructor(public firebaseService: FirebaseService, public router : Router,private userService : UserService) {
    this.darkTheme = false;
   }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignedIn= true
      this.userService.getUserById(this.firebaseService.getUserID()).subscribe( res =>{
        this.imageDeProfilURL = res[0].image_profil
        this.comptePro = res[0].pro
      })
    }else{
      this.isSignedIn = false
    }
  }

  changeColor(){
    if(this.darkTheme){
      document.body.removeAttribute('data-theme');
      this.darkTheme = false;
    }else{
      document.body.setAttribute('data-theme', 'dark')
      this.darkTheme = true;
    }
  } 

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    location.reload();
  }

  goProfile(){
    this.router.navigate(['/', 'profil', this.firebaseService.getUserID()]);
  }
}
