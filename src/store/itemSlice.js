import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    setFavorite(state, action) {
      const item = action.payload;
      const favIds = state.favorites.map((item) => item._id);
      if (!favIds.includes(item._id)) {
        state.favorites.push(item);
       
      }
      return state;
      
    },
   

    clearFavorites(state, action) {
      return initialState;
    },
  },
});
