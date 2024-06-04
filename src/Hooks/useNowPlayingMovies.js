import { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetching the Data from TMDB api and updating the our reduxStore.
  const nowPlayingmovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data?.json();

    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    if (!nowPlayingmovies) getNowPlayingMovies(); // Memoization of Data
  }, []);
};

export default useNowPlayingMovies;
