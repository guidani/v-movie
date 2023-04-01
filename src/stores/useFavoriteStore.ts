import { defineStore } from "pinia";

type TfavoriteMovie = {
  name: string;
  id: number;
};

export const useFavoriteStore = defineStore("favorites", {
  state: () => ({
    listOfFavorites: <TfavoriteMovie[]>[],
  }),
  getters: {
    getFavorites: (state) => state.listOfFavorites,
    isFavorite: (state) => (movie: TfavoriteMovie) =>
      state.listOfFavorites.some((favorite) => favorite.id === movie.id),
  },
  actions: {
    addToFavorite(movie: TfavoriteMovie) {
      this.listOfFavorites.push(movie);
    },
    removeFromFavorite(id: number) {
      const index = this.listOfFavorites.findIndex(
        (favorite) => favorite.id === id
      );
      if (index !== -1) {
        this.listOfFavorites.splice(index, 1);
      }
    },
  },
});
