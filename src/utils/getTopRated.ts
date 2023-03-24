// Get the top rated movies on TMDB.

import { Movie } from "../types/Movie";

export default async function getTopRated(): Promise<Movie[]> {
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1
  `;
  const response = await fetch(URL);
  const json = response.json();
  return json;
}
