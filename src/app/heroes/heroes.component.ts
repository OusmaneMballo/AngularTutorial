import { Component, OnInit } from '@angular/core';
import { Ihero} from '../Ihero';
import {HeroService} from '../hero.service';
import { listheroes } from '../ListHeroes';
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Ihero[]
  //heroes=listheroes;
  selectedHero: Ihero;

  onSelection(hero: Ihero): void{
    this.selectedHero=hero;
  }

  getHeroes(): void {
    this.heroService.getHero().subscribe(heroes=>this.heroes=heroes);
  }
  
}
