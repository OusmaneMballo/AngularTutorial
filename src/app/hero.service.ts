import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Ihero} from './Ihero';
import { listheroes} from './ListHeroes';
import { Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';

// Lorsque vous fournissez le service au niveau racine, Angular crée une instance unique et 
// partagée de HeroService et l'injecte dans toute classe qui le demande. L'enregistrement du fournisseur
//  dans les métadonnées permet également à Angular d'optimiser une application en supprimant 
//  le service s'il s'avère finalement ne pas être utilisé.@Injectable
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHero(): Observable<Ihero[]>{
    this.messageService.add("La liste de tout les heros trouve!...");
    return of(listheroes);
  }
}
