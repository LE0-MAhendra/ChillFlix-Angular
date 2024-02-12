import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Genre, GenresDto, Movie, MoviesDto } from '../../types/movie';
import { CommonModule } from '@angular/common';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, ShowItemComponent, PaginatorModule, RouterLink],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  constructor(
    private movesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  genres$: Observable<GenresDto> | null = null;
  shows$: Observable<Movie[]> | null = null;
  genreId = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.shows$ = this.movesService.getMoviesByGenre(this.genreId);
    });
    this.genres$ = this.movesService.getMoviesGenre();
  }
}
