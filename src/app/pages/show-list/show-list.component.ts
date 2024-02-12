import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie, MoviesDto } from '../../types/movie';
import { CommonModule } from '@angular/common';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [
    CommonModule,
    ShowItemComponent,
    InputTextModule,
    FormsModule,
    PaginatorModule,
  ],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  SearchValue = '';

  showLists$: Observable<MoviesDto> | null = null;
  ngOnInit(): void {
    this.getPagesShows(1);
  }
  getPagesShows(page: number, searchKey?: string) {
    this.showLists$ = this.moviesService.searchMovies(page, searchKey);
  }
  SearchChanged() {
    this.getPagesShows(1, this.SearchValue);
  }
  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagesShows(pageNumber, this.SearchValue);
  }
}
