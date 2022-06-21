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
   imageDeProfilURL : string = '';
   comptePro : boolean = false;
   @Output() isLogout = new EventEmitter<void>()
   
   constructor(public firebaseService: FirebaseService, public router1 : ActivatedRoute,private userService : UserService, public router : Router) {
    this.userId = router1.snapshot.paramMap.get('id') || '0'
    userService.getUserById(this.userId).subscribe(loggedUser =>{
      this.user = loggedUser;
    } )
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
   goModifProfile(){
    this.router.navigate(['/', 'modifierProfil', this.firebaseService.getUserID()]);
  }
}
