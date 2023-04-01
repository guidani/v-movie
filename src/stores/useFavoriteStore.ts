import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorites", {
  state: () => ({
    listOfFavorites: <string[]>[],
  }),
  getters: {
    getFavorites: (state) => state.listOfFavorites,
    isFavorite: (state) => (name: string) =>
      state.listOfFavorites.includes(name),
  },
  actions: {
    addToFavorite(movieName: string) {
      this.listOfFavorites.push(movieName);
    },
    removeFromFavorite(movieName: string) {
      const index = this.listOfFavorites.indexOf(movieName);
      if (index != -1) {
        this.listOfFavorites.splice(index, 1);
      }
    },
  },
});
