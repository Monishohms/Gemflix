import { useSelector } from "react-redux";
import useBgTrailer from "../Hooks/useBgTrailer";

const VideoBackground = ({ movie_id }) => {
  // Fetch Trailer Vedio From API & updating it in a store with trailer vedio data

  const trailerVideo = useSelector((store) => store.movies?.bgTrailer);
  useBgTrailer(movie_id);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        //frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerpolicy="strict-origin-when-cross-origin"
        //allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
