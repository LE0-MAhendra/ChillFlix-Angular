import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { CommonModule } from '@angular/common';
import { ApiImg } from '../../constants/values';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;
  imageBaseurl = ApiImg;
}
