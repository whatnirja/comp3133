import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RemoveSpacesPipe],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail {
  @Input() hero?: Hero;
}