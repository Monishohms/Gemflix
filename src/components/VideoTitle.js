import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { useSelector } from "react-redux";
//import { addPlayButton } from "../utils/moviesSlice";

const VideoTitle = ({
  title,
  overview,
  original_language,
  popularity,
  poster_path,
  release_date,
  vote_count,
}) => {
  const [showModal, setShowModal] = useState(false);
  //const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.bgTrailer);

  return (
    <div className="absolute pt-20 px-6 md:pt-48 md:px-12  text-white bg-gradient-to-r from-black w-screen aspect-video ">
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            trailer_key={trailer?.key}
            original_title={title}
            release_date={release_date}
            posterPath={poster_path}
            popularity={popularity}
            narrative={overview}
            language={original_language}
            vote_count={vote_count}
          />,
          document.app
        )}
      <h1 className="text-sm font-bold md:text-4xl md:font-extrabold">
        {title}
      </h1>
      <p className="w-7/6 text-xs md:text-xl py-3 md:w-2/6 font-light">
        {overview}
      </p>
      <div className=" flex ">
        <button
          onClick={() => setShowModal(true)}
          className="mr-4 flex items-center md:text-lg bg-white shadow-lg text-black hover:bg-opacity-70  font-semibold rounded-md border border-black  p-1 md:p-2 md:m-2 md:px-6 cursor-pointer"
        >
          <FaPlay className="text-sm md:text-2xl" />
          &nbsp; Play
        </button>

        <button className="flex items-center md:text-lg font-semibold shadow-lg  rounded-md   border border-slate-500 p-1 md:p-2 md:m-2 md:px-6 cursor-pointer text-white">
          <LuInfo className="text-sm md:text-2xl" />
          &nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
