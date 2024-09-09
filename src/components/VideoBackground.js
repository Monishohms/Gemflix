import { useSelector } from "react-redux";
import useBgTrailer from "../Hooks/useBgTrailer";

const VideoBackground = ({ movie_id }) => {
  // Fetch Trailer Vedio From API & updating it in a store with trailer vedio data

  const trailerVideo = useSelector((store) => store.movies?.bgTrailer);
  useBgTrailer(movie_id);
  return (
    <div className="top-10">
      <iframe
        className=" w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0"
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
