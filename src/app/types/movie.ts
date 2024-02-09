export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: Number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: Number;
  vote_count: Number;
  name?: string;
}
export interface MoviesDto {
  page: Number;
  results: Movie[];
  total_pages: Number;
  total_results: Number;
}
