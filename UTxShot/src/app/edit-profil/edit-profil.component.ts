import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  erreur: string = ''
  user!: User[];
  userId! :string
  userID! : string
  isSignedIn = false
  darkTheme : boolean;
  imageDeProfilURL : string = '';
  comptePro : boolean = false;
  @Output() isLogout = new EventEmitter<void>()
   
    constructor(public firebaseService: FirebaseService, public router : ActivatedRoute,private userService : UserService) {
      this.userId = router.snapshot.paramMap.get('id') || '0'
      userService.getUserById(this.userId).subscribe(loggedUser =>{
        this.user = loggedUser;
      })
      this.darkTheme = false;
    }
 
   ngOnInit(): void {
     if(localStorage.getItem('user')!== null){
       this.isSignedIn= true
      this.userService.getUserById(this.firebaseService.getUserID()).subscribe( res =>{
             this.imageDeProfilURL = res[0].image_profil
             this.comptePro = res[0].pro
             this.user= res;
           })
     }else{
       this.isSignedIn = false
     }
     this.userID = this.firebaseService.getUserID()
   }
   isCompleted():string{
    if(this.user[0].nom == ""){
        return 'Entrez un nom'
    }else if(this.user[0].prenom == ""){
        return 'Entrez un prénom'
    }else if(this.user[0].pseudo == ""){
        return 'Entrez un pseudo'
    }else{
        return 'ok'
    }        
}

   updateObject(){
    this.erreur =  this.isCompleted()
    console.log(this.erreur)
    if(this.erreur == 'ok'){
    this.userService.updateUser(this.user[0])
    }
  }

}
