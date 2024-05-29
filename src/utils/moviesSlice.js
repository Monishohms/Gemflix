import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    bgTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBgTrailer: (state, action) => {
      state.bgTrailer = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addBgTrailer } = moviesSlice.actions;
