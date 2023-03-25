//Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website. These items are assembled by looking at keywords and genres.
export default async function getSimilarMovies(movie_id: string | number) {
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1
  `;
  const response = await fetch(URL);
  const json = response.json();
  return json;
}
