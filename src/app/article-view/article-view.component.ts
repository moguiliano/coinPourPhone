import { Component, OnInit } from '@angular/core';
import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  constructor(private AppareilService: AppareilService) {

  }
  // Persons: any[];
  articles: any[];
  ngOnInit() {// pour recuperer les fonctions et données depuis appareil service
    this.articles = this.AppareilService.articles;
  }
}
