import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormat } from '../input-format';
import { HeroDetail } from '../hero-detail/hero-detail';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemoveSpacesPipe,
    InputFormat,
    HeroDetail
  ],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}