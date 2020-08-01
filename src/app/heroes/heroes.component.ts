import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // only allowed  one constructor in ts
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    // call getHeroes() inside the ngOnInit lifecycle hook and
    // let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
      this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Create a method to retrieve the heroes from the service.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
