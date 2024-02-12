import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { TvshowsDto } from '../../types/tvshow';
import { Observable } from 'rxjs';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [
    CommonModule,
    ShowItemComponent,
    InputTextModule,
    FormsModule,
    PaginatorModule,
  ],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.scss',
})
export class TvListComponent implements OnInit {
  SearchValue = '';
  constructor(private tvShowService: TvshowsService) {}
  showLists$: Observable<TvshowsDto> | null = null;
  ngOnInit(): void {
    this.getPagesShows(1);
  }
  getPagesShows(page: number, searchKey?: string) {
    this.showLists$ = this.tvShowService.searchTvshows(page, searchKey);
  }
  SearchChanged() {
    this.getPagesShows(1, this.SearchValue);
  }
  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagesShows(pageNumber, this.SearchValue);
  }
}
