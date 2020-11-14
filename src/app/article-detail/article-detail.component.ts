import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  nom :string;
  prix:number;
  model:string;
  id:number;

  constructor(private appareilService:AppareilService ,private route:ActivatedRoute) 
  // activatedroute contient toutes les information de la route active 
  { }

  ngOnInit(): void {
const id = this.route.snapshot.params['id'];//pour prendre l'id qui lui est passé en parametre dans l'url
this.nom = this.appareilService.getArticleById(+id).nom;
this.model = this.appareilService.getArticleById(+id).model;
this.prix = this.appareilService.getArticleById(+id).prix;
  }
  
  
}
