import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../src/app/hero';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css'],
  imports: [NgFor, HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

  selectedHero!: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}