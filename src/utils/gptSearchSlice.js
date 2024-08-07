import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    loading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults, toggleLoading } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
