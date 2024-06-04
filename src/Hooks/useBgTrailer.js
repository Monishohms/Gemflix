import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/Constant";
import { addBgTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useBgTrailer = (movie_id) => {
  // Fetch Trailer Vedio From API & updating it in a store with trailer vedio data

  const dispatch = useDispatch();
  const trailerVedio = useSelector((store) => store.movies.bgTrailer);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      API_options
    );
    const json = await data.json();

    const filteredMovie = json?.results?.filter(
      (vid) => vid?.type === "Trailer"
    );

    const trailer = filteredMovie.length ? filteredMovie[0] : json.results[0];

    dispatch(addBgTrailer(trailer));
  };

  useEffect(() => {
    if (!trailerVedio) getMovieVideo(); // Memoization of Data
  }, []);

  return <div>useBgTrailer</div>;
};

export default useBgTrailer;
