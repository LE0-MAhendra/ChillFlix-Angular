import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';
import { ApiUrl, Apikey } from '../constants/values';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = ApiUrl;
  private apikey = Apikey;
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apikey}`
    );
  }
}
