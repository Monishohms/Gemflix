import { IoCloseCircleOutline } from "react-icons/io5";
import { FcClapperboard } from "react-icons/fc";
import { POSTER_CDN } from "../utils/Constant";
import { FaPlay } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { PiHeartHalfFill } from "react-icons/pi";
import { useState } from "react";

function ModalContent({
  onClose,
  trailer_key,
  original_title,
  release_date,
  posterPath,
  popularity,
  narrative,
  language,
  vote_count,
}) {
  const close = onClose;
  const [play, setPlay] = useState(false);
  const trailerVideo = trailer_key;

  return (
    <div
      className={
        "absolute top-0 bg-black drop-shadow-sm  mx-auto h-[25%] w-[50%] m-1 p-1  rounded-lg aspect-video  border border-gray-400 overflow-y-scroll overflow-x-hidden no-scrollbar-custom"
      }
    >
      {play && (
        <div className=" w-full h-full overflow-hidden flex items-center bg-black rounded-lg">
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo +
              "?autoplay=1&controls=0&showinfo=0"
            }
            allow="autoplay"
          ></iframe>

          <i
            onClick={() => setPlay(false)}
            className="absolute top-0 w-full cursor-pointer h-full overflow-hidden flex items-center bg-black justify-center invisible sm:visible sm:opacity-0 sm:hover:opacity-60"
          >
            <IoCloseCircleOutline className="cursor-pointer  text-4xl text-white" />
          </i>
        </div>
      )}
      <h1 className="flex font-bold text-white mx-1 items-center text-2xl py-2">
        <FcClapperboard className="text-red-500 m-2 text-3xl" />
        {original_title}
      </h1>
      <div className="flex">
        <div className="text-white items-center">
          <div className="object-cover pr-2 cursor-pointer mx-3 w-40 h-32 ">
            <img
              className="rounded-lg"
              alt="Movie Card "
              src={POSTER_CDN + posterPath}
            />
            <div className="pl-4">
              <button
                onClick={() => setPlay(true)}
                className="flex items-center text-lg bg-white shadow-lg text-black hover:bg-opacity-70  font-semibold rounded-md border border-black p-2 m-2 px-4 pl-2 cursor-pointer"
              >
                <FaPlay className="text-xl text-black" />
                &nbsp; Play
              </button>
            </div>
          </div>
        </div>

        <div className=" text-white font-extralight text-opacity-80 pr-1 items-center text-left">
          <p className="py-1">
            <b className="font-semibold">Language :</b> {language}
          </p>
          <p className="py-1 flex">
            <b className="font-semibold">Popularity :&nbsp;</b> {popularity}
            &nbsp;
            <PiHeartHalfFill className="m-1  text-red-500" />
          </p>
          <p className="py-1">
            <b className="font-semibold">Release Date :</b> {release_date}
          </p>

          <p className="py-1 flex ">
            <b className="font-semibold">Total Vote :&nbsp;</b> {vote_count}
            &nbsp;
            <GrLike className="m-1 text-red-500" />
          </p>
          <p className="py-1">
            <b className="font-semibold">Narrative :</b> {narrative}
          </p>
        </div>
      </div>

      <div>
        <i
          onClick={close}
          className="fixed top-10 right-1 sm:right-5 md:right-10 opacity-90 text-3xl sm:text-4xl fa-solid fa-circle-xmark fa-shake cursor-pointer"
        >
          <IoCloseCircleOutline className="cursor-pointer  text-4xl text-white" />
        </i>
      </div>
    </div>
  );
}
export default ModalContent;
