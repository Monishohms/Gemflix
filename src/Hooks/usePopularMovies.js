import { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addUsePopularMovies, moviesData } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetching the Data from TMDB api and updating the our reduxStore.

  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getusePopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_options
    );
    const json = await data?.json();
    dispatch(moviesData(json?.results));
    dispatch(addUsePopularMovies(json?.results));
  };

  useEffect(() => {
    if (!popularMovies) getusePopularMovies(); // Memoization of Data
  }, []);
};

export default usePopularMovies;
