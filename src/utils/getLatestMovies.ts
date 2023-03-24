// Get the primary information about a movie.

import { Movie } from "../types/Movie";

export default async function getLatestMovies(): Promise<Movie[]> {
  const URL = `https://api.themoviedb.org/3/movie/latest?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`;
  const response = await fetch(URL);
  const json = response.json();
  return json;
}
