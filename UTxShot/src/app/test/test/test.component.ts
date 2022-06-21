import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
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
  newTest : Test = new Test;
  currentImageUrl!: Observable<string | null>;
  fileToAdd !: File;

  addFile(event :any){
    this.fileToAdd = event.target.files[0]
    const filePath = this.fileToAdd.name;
    
  }

  constructor(private testService :TestService, public service : FirebaseService, private storage : AngularFireStorage) {
    
   }

  ngOnInit(): void {
    this.testService.getTests().subscribe(test =>{
      this.test = test;
    } )
    this.userID = this.service.getUserID()
    
  }

  addObject(){

    if(this.fileToAdd != null){
      this.newTest.title = 'title'
      this.newTest.description = 'descript1'

    const task = this.storage.upload('/Users/user:'+this.userID, this.fileToAdd).catch(res =>{
      console.log(res)
    })

    const ref = this.storage.ref('/Users/user:'+this.userID);
    ref.getDownloadURL().subscribe(res =>{
        this.currentImageUrl = res
        if( this.currentImageUrl != null){
          this.newTest.image = this.currentImageUrl
          console.log(this.newTest.image)
          this.testService.addTest(this.newTest)
        }
        this.ngOnInit()
     })
    }else{
      window.alert('selectionnez une image')
    }
  }

  updateObject(index:number){
    this.test[index].description = this.test[index].id
    this.testService.updateTest(this.test[index])
  }

  deleteObject(index:number){
    this.testService.deleteTest(this.test[index])
  }
  
  // chooseFile(event : string){
  //   this.currentImageUrl = event
    
  // }

}
