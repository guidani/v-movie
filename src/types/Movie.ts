type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any; // can be null or an object
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
