import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    setFavorite(state, action) {
      const favoriteItem = action.payload;
      state.favorites.push(favoriteItem);
      return state;
    },

    removeFavorite(state, action) {
      const idToRemove = action.payload; //id koji zelim da obrisem
      state.favorites = state.favorites.filter(
        (item) => item.id !== idToRemove
      );
    },
    clearFavorites(state, action) {
      return initialState;
    },
  },
});
