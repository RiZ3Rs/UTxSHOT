import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UTxShot';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
  }
}