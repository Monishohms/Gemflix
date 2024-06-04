import { POSTER_CDN } from "../utils/Constant";

const MovieCards = ({ posterPath, original_title, release_date }) => {
  if (!posterPath) return null;
  return (
    <div className=" mt-2 hover:-translate-y-5  hover:scale-90 transition-all py-4">
      <div className=" min-w-48">
        <img
          className="object-cover pr-4 cursor-pointer  mx-2 min-w-48 "
          alt="Movie Card"
          src={POSTER_CDN + posterPath}
        />
      </div>
      <p className="text-gray-300 text-font-semibold  text-sm pl-2 line-clamp-1 w-32">
        {original_title}
      </p>
      <p className="text-gray-300 font-light text-sm pl-2 ">{release_date}</p>
    </div>
  );
};

export default MovieCards;
