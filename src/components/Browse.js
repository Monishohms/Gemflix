import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
