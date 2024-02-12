import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresDto, Movie, MoviesDto } from '../types/movie';
import { ApiUrl, Apikey } from '../constants/values';
import { map } from 'rxjs';
import { VideosDto } from '../types/video';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';

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
  getMovieVideosById(id: string) {
    return this.http
      .get<VideosDto>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apikey}`
      )
      .pipe(map((data) => data.results));
  }
  getMovieImagesById(id: string) {
    return this.http
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${id}/images?api_key=${this.apikey}`
      )
      .pipe(map((data) => data.backdrops));
  }
  getMovieCreditsById(id: string) {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apikey}`
      )
      .pipe(map((data) => data.cast));
  }
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apikey}`
    );
  }
  getMoviesGenre() {
    return this.http.get<GenresDto>(
      `${this.apiUrl}/genre/movie/list?api_key=${this.apikey}`
    );
  }
  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apikey}`
      )
      .pipe(
        map((data) => {
          return data.results;
        })
      );
  }
}
