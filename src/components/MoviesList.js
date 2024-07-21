import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="  py-8">
      <h1 className="text-2xl text-white font-bold pl-2 ">{title}</h1>

      <div className="flex items-start justify-start overflow-x-scroll no-scrollbar-custom  h-96 ">
        {movies?.map((movie) => (
          <MovieCards
            key={movie.id}
            posterPath={movie?.poster_path}
            original_title={movie?.original_title}
            release_date={movie?.release_date}
            movie_id={movie?.id}
            popularity={movie?.popularity}
            narrative={movie?.overview}
            language={movie?.original_language}
            vote_count={movie?.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
