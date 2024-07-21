import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  const {
    original_title,
    overview,
    id,
    original_language,
    popularity,
    poster_path,
    release_date,
    vote_count,
  } = mainMovie;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        release_date={release_date}
        poster_path={poster_path}
        popularity={popularity}
        original_language={original_language}
        vote_count={vote_count}
      />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
