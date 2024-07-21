import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    bgTrailer: null,
    playButton: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUsePopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addBgTrailer: (state, action) => {
      state.bgTrailer = action.payload;
    },
    addPlayButton: (state) => {
      state.playButton = !state.playButton;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addBgTrailer,
  addUpcomingMovies,
  addTopRatedMovies,
  addUsePopularMovies,
  addPlayButton,
} = moviesSlice.actions;
