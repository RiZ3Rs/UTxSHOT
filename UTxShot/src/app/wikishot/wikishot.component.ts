import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-wikishot',
  templateUrl: './wikishot.component.html',
  styleUrls: ['./wikishot.component.scss']
})
export class WikishotComponent implements OnInit {

  ArticleArray : Article[] = []

  constructor(service: ArticleService) {
    this.ArticleArray = service.getProducts()
  }

  ngOnInit(): void {

  }

}
