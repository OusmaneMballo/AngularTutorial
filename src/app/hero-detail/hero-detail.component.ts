import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

import {Ihero} from '../Ihero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private serviceMessage: MessagesService) { }

  ngOnInit(): void {
  }
  @Input() hero : Ihero;

  close(): void{
    this.hero=null;
    this.serviceMessage.clear();
    this.serviceMessage.add("Liste de tout les heros trouvee!...")
  }

}
