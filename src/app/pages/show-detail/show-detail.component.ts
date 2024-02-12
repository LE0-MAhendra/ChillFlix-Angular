import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
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
  showId = 0;
  baseUrl = IMAGES_SIZES;
  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCredits$: Observable<Actor[]> | null = null;
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
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
    });
  }
}
