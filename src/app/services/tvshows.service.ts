import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiUrl, Apikey } from '../constants/values';
import { TvshowsDto } from '../types/tvshow';

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
}
