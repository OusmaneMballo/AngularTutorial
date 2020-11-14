import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';

import {Ihero} from '../Ihero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero : Ihero;

  close(): void{
    this.hero=null;
  }

}
