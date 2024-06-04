import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className=" -mt-80 relative z-20 pl-12">
        <MoviesList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />

        <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

        <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />

        <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
