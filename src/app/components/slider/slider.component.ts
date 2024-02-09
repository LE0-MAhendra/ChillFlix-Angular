import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  movies: any;
  constructor(private movieService: MoviesService) {}
  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.movieService
      .getPopularMovies()
      .subscribe((data) => (this.movies = data));
  }
}
