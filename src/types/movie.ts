export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
}

export interface MovieDetail extends Movie {
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
}
