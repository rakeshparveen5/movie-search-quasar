import { api } from 'boot/axios';
import type { Movie, MovieDetail } from '../types/movie';

const API_KEY_OM_DB = import.meta.env.VITE_OMDB_API_KEY;

interface SearchResponse {
  Search: Movie[];
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const res = await api.get<SearchResponse>('/', {
    params: {
      apikey: API_KEY_OM_DB,
      s: query,
    },
  });

  return res.data.Search;
};

export const getMovieDetails = async (id: string): Promise<MovieDetail> => {
  const res = await api.get<MovieDetail>('/', {
    params: {
      apikey: API_KEY_OM_DB,
      i: id,
    },
  });

  return res.data;
};
