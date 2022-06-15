import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test !: Test[];
  userID! : string;

  constructor(private testService :TestService, public service : FirebaseService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(test =>{
      this.test = test;
    } )
    this.userID = this.service.getUserID()
    
  }

  addObject(){
    let test = new Test(this.userID,'title', 'description');
    this.testService.addTest(test)
  }



}
