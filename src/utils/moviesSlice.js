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
    allMoviesData: [],
    movieId: null,
    allMoviesInfo: [],
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
    moviesData: (state, action) => {
      state.allMoviesData.push(action.payload);
      state.allMoviesData = state.allMoviesData.flat();
    },
    modalData: (state, action) => {
      const { movieid, status } = action.payload;
      state.movieId = movieid;
      state.modalStatus = status;

      const filteredData = state.allMoviesData?.filter(
        (data) => data?.id === state.movieId,
        (state.allMoviesInfo = [])
      );
      filteredData?.map((data) => state.allMoviesInfo.push([data, false]));

      if (state.allMoviesInfo[0][0]?.id === state.movieId)
        state.allMoviesInfo[0][1] = true;
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
  moviesData,
  modalData,
} = moviesSlice.actions;
