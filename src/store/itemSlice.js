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
      return state
      
    },
   

    clearFavorites(state, action) {
      return initialState;
    },
  },
});
