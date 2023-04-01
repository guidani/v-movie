import { defineStore } from "pinia";

type TfavoriteMovie = {
  name: string;
  id: number;
};

export const useFavoriteStore = defineStore("favorites", {
  state: () => ({
    localFavorites: <TfavoriteMovie[]>JSON.parse(localStorage.getItem("local-favorites") || "[]"),
  }),
  getters: {
    getLocalFavorites: (state) => state.localFavorites,
    isFavorite: (state) => (movie: TfavoriteMovie) =>
      state.localFavorites.some(
        (favorite: { id: number }) => favorite.id === movie.id
      ),
  },
  actions: {
    updateLocalStorage() {
      localStorage.setItem(
        "local-favorites",
        JSON.stringify(this.localFavorites)
      );
    },
    addToFavorite(movie: TfavoriteMovie) {
      this.localFavorites.push(movie), this.updateLocalStorage();
    },
    removeFromFavorite(id: number) {
      const index = this.localFavorites.findIndex(
        (favorite: { id: number }) => favorite.id === id
      );
      if (index !== -1) {
        this.localFavorites.splice(index, 1);
        this.updateLocalStorage();
      }
    },
  },
});
