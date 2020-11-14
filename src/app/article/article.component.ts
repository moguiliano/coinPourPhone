import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }
  @Input() nom:string //@input : nom de propriété qui peut etre recupérée d'un autre component
  @Input() model:string
  @Input() prix:number
  @Input() id:number
  

  ngOnInit(): void {
  }

}
