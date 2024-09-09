import { API_options, POSTER_CDN } from "../utils/Constant";
import React, { useState } from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalData } from "../utils/moviesSlice";

const MovieCards = ({
  posterPath,
  original_title,
  release_date,
  movie_id,
  popularity,
  narrative,
  language,
  vote_count,
  modalStatus,
}) => {
  const [showKey, setShowKey] = useState(null);
  const movieId = movie_id;
  const dispatch = useDispatch();
  const showModal = useSelector((store) => store.movies.modalStatus);

  const handleMovieInfo = async () => {
    dispatch(modalData({ movieid: movieId, status: modalStatus }));

    const data = await fetch(
      " https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_options
    );
    const json = await data?.json();

    const filterData = json?.results?.filter(
      (data) => data?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : data?.results[0];
    const trailer_key = trailer?.key;
    setShowKey(trailer_key);
  };

  if (!posterPath) return null;
  return (
    <div
      onClick={handleMovieInfo}
      className=" mt-2 hover:-translate-y-5  hover:scale-90 transition-all py-4"
    >
      <div className=" md:h-72 md:w-48">
        <img
          className="object-cover pr-4 cursor-pointer mx-2 w-full h-full "
          alt="Movie Card"
          src={POSTER_CDN + posterPath}
        />
      </div>
      <p className="text-gray-300 text-font-semibold  text-sm pl-2 line-clamp-1 w-32">
        {original_title}
      </p>
      <p className="text-gray-300 font-light text-sm pl-2 ">{release_date}</p>
      {showModal &&
        createPortal(
          <ModalContent
            original_title={original_title}
            release_date={release_date}
            posterPath={posterPath}
            trailer_key={showKey}
            popularity={popularity}
            narrative={narrative}
            language={language}
            vote_count={vote_count}
          />,
          document.body
        )}
    </div>
  );
};

export default MovieCards;
