// Get a list of the current popular movies on TMDB. This list updates daily.

import { Movie } from "../types/Movie";

export default async function getPopularMovies(): Promise<Movie[]> {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
