import { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies, moviesData } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // Fetching the Data from TMDB api and updating the our reduxStore.

  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_options
    );
    const json = await data?.json();

    dispatch(addUpcomingMovies(json?.results));
    dispatch(moviesData(json?.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies(); // Memoization of Data
  }, []);
};

export default useUpcomingMovies;
