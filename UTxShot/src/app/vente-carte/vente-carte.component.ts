import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-vente-carte',
  templateUrl: './vente-carte.component.html',
  styleUrls: ['./vente-carte.component.scss']
})
export class VenteCarteComponent implements OnInit {
  @Input() article! : Article;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goOnDetail(){
    this.router.navigate(['/', 'article', this.article.id]);
  }

}
