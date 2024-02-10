import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { SingleSlideComponent } from '../../components/single-slide/single-slide.component';
import { TabViewModule } from 'primeng/tabview';
import { ApiImg } from '../../constants/values';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [CommonModule, SingleSlideComponent, TabViewModule],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = 0;
  baseUrl = ApiImg;
  show$: Observable<Movie> | null = null;
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
      this.show$ = this.movieService.getMovieById(String(this.showId));
    });
  }
}
