import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User[];
  userId! :string


   isSignedIn = false
   darkTheme : boolean;
   imageDeProfilURL : string = '';
   comptePro : boolean = false;
   @Output() isLogout = new EventEmitter<void>()
   
   constructor(public firebaseService: FirebaseService, public router : ActivatedRoute,private userService : UserService) {
    this.userId = router.snapshot.paramMap.get('id') || '0'
    userService.getUserById(this.userId).subscribe(loggedUser =>{
      this.user = loggedUser;
    } )
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
 

}
