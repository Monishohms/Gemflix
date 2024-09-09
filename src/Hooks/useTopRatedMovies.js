import { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, moviesData } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetching the Data from TMDB api and updating the our reduxStore.

  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const json = await data?.json();

    dispatch(addTopRatedMovies(json?.results));
    dispatch(moviesData(json?.results));
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies(); // Memoization of Data
  }, []);
};

export default useTopRatedMovies;
