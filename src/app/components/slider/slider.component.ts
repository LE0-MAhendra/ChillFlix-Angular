import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ApiImg } from '../../constants/values';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  constructor(private movieService: MoviesService, private ngZone: NgZone) {}
  check = false;
  currSlide = 0;
  imgbaseUrl = ApiImg;
  movies$ = this.movieService.getDatabyType('popular', 10);
  movies = this.movies$.subscribe((movie) => {
    if (movie) {
      this.check = true;
    }
  });
  ngOnInit() {
    if (this.check) {
      this.changeSlide();
    }
  }

  changeSlide() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.currSlide = (this.currSlide + 1) % 10;
      });
    }, 5000);
  }
}
