import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test !: Test[];

  constructor(private testService :TestService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(test =>{
      console.log(test)
      this.test = test;
    } )
  }

}
