import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { TvshowsService } from '../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../types/tvshow';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
    private tvShowservice: TvshowsService
  ) {}
  popularMovies$ = this.moviesService.getDatabyType('popular', 10);
  upcomingMovies$ = this.moviesService.getDatabyType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getDatabyType('top_rated', 12);
  PupulartvShows$ = this.tvShowservice
    .getTvShowsbyType('popular', 12)
    .pipe(map(mapToMovies));
  topRatedShows$ = this.tvShowservice
    .getTvShowsbyType('top_rated', 12)
    .pipe(map(mapToMovies));
}
