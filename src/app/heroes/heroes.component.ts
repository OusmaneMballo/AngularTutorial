import { Component, OnInit } from '@angular/core';
import { Ihero} from '../Ihero';
import {HeroService} from '../hero.service';
import {MessagesService} from '../messages.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Ihero[]
  //heroes=listheroes;
  selectedHero: Ihero;

  onSelection(hero: Ihero): void{
    this.selectedHero=hero;
    this.messageService.clear();
    this.messageService.add("Hero trouve!...");
  }

  getHeroes(): void {
    this.heroService.getHero().subscribe(heroes=>this.heroes=heroes);
  }
  
}
