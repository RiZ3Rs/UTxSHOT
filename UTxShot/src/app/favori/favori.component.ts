import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { FirebaseService } from '../services/firebase.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.scss']
})
export class FavoriComponent implements OnInit {
  ArticleArray : Article[] = []
  currentUser! : string;

  constructor(private articleService: ArticleService, private likeService : LikeService,public firebaseService: FirebaseService) {
    this.currentUser = firebaseService.getUserID()
   }

  ngOnInit(): void {
    this.likeService.getLikeByBDDId(this.currentUser).subscribe(res =>{
      res.data()?.ProductLIked.forEach(element => {
        this.articleService.getProductByBDDId(element).subscribe(res =>{
          let newArticle = res.data()|| new Article()
          newArticle.id = element
          this.ArticleArray.push(newArticle)
        })
      });
    })
  }

}
