import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { ShowListComponent } from './pages/show-list/show-list.component';
import { TvListComponent } from './pages/tv-list/tv-list.component';
import { GenresComponent } from './pages/genres/genres.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Movies', component: ShowListComponent },
  { path: 'Tv', component: TvListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
];
