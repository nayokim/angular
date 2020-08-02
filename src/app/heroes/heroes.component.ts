import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // only allowed  one constructor in ts
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    // call getHeroes() inside the ngOnInit lifecycle hook and
    // let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
      this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }

  // Create a method to retrieve the heroes from the service.
  // The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now
  // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
