import { Component, OnInit , Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {

  


  }
@Input() name:string; 
@Input() age:number;
@Input() indexAppareil:number;
// onAugmenter()
//   {
//    this.appareilService.AugmenterForOne(this.indexAppareil) 
//   }
//   onBaisser()
//   {
//    this.appareilService.resetForOne(this.indexAppareil) 
//   }
}
