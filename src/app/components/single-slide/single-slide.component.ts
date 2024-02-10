import { Component, Input } from '@angular/core';
import { ApiImg } from '../../constants/values';
import { Movie } from '../../types/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-slide.component.html',
  styleUrl: './single-slide.component.scss',
})
export class SingleSlideComponent {
  constructor() {}
  imgbaseUrl = ApiImg;
  @Input() slides: Movie[] = [];
}
