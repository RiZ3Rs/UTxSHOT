import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false
  darkTheme : boolean;
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) {
    this.darkTheme = false;
   }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
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
}
