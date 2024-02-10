import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDto } from '../types/movie';
import { ApiUrl, Apikey } from '../constants/values';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = ApiUrl;
  private apikey = Apikey;
  constructor(private http: HttpClient) {}
  getDatabyType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apikey}`
    );
  }
  
}
