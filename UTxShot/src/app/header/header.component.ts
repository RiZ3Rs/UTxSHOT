import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkTheme : boolean;

  constructor() {
    this.darkTheme = false;
   }

  ngOnInit(): void {
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
}
