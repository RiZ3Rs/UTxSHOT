import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User[];
  userId! :string

  constructor( userService : UserService , router : ActivatedRoute) {
    this.userId = router.snapshot.paramMap.get('id') || '0'
    userService.getUserById(this.userId).subscribe(loggedUser =>{
      this.user = loggedUser;
    } )
   }


  ngOnInit(): void {
  }

}
