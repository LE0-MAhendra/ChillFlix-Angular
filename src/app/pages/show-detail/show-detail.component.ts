import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable, map } from 'rxjs';
import { Movie } from '../../types/movie';
import { SingleSlideComponent } from '../../components/single-slide/single-slide.component';
import { TabViewModule } from 'primeng/tabview';
import { IMAGES_SIZES } from '../../constants/values';
import { Video } from '../../types/video';
import { VideoEmbededComponent } from '../../components/video-embeded/video-embeded.component';
import { Image } from '../../types/image';
import { ImageModule } from 'primeng/image';
import { Actor, CreditsDto } from '../../types/credits';
import { CarouselModule } from 'primeng/carousel';
import { TvshowsService } from '../../services/tvshows.service';
import { mapToMovie, mapToMovies } from '../../types/tvshow';
@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [
    CommonModule,
    SingleSlideComponent,
    TabViewModule,
    VideoEmbededComponent,
    ImageModule,
    CarouselModule,
  ],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  showType: 'tv' | 'movie' = 'movie';
  baseUrl = IMAGES_SIZES;
  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCredits$: Observable<Actor[]> | null = null;
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService,
    private tvService: TvshowsService
  ) {}
  ngOnInit() {
    this.showId = this.router.snapshot.params['id'];
    this.showType = this.router.snapshot.params['type'];
    if (this.showType === 'movie') {
      this.show$ = this.movieService.getMovieById(String(this.showId));
      this.showVideos$ = this.movieService.getMovieVideosById(
        String(this.showId)
      );
      this.showImages$ = this.movieService.getMovieImagesById(
        String(this.showId)
      );
      this.showCredits$ = this.movieService.getMovieCreditsById(
        String(this.showId)
      );
    }
    if (this.showType === 'tv') {
      this.show$ = this.tvService
        .getTvShowById(this.showId)
        .pipe(map(mapToMovie));
      this.showVideos$ = this.tvService.getTvShowVideos(this.showId);
      this.showImages$ = this.tvService.getTvShowImages(this.showId);
      this.showCredits$ = this.tvService.getTvShowCast(this.showId);
    }
  }
}
