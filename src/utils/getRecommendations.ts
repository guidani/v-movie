// Get a list of recommended movies for a movie.

import { Movie } from "../types/Movie";

export default async function getRecommendations(movie_id: string | number): Promise<Movie[]> {
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1
  `;
  const response = await fetch(URL);
  const json = response.json();
  return json;
}
