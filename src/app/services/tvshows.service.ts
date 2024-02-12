import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiUrl, Apikey } from '../constants/values';
import { Tvshow, TvshowsDto } from '../types/tvshow';
import { CreditsDto } from '../types/credits';
import { ImagesDto } from '../types/image';
import { VideosDto } from '../types/video';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = ApiUrl;
  private apikey = Apikey;
  constructor(private http: HttpClient) {}
  getTvShowsbyType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apikey}`
    );
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideosDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apikey}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apikey}`)
      .pipe(map((data) => data.backdrops));
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apikey}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }
  searchTvshows(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/tv' : 'tv/popular';
    return this.http.get<TvshowsDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apikey}`
    );
  }
}
