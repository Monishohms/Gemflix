import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  return (
    <div className="min-h-full px-[4%] py-[2%]">
      <div className="w-full h-full pl-4 backdrop-blur-lg ">
        {movieNames?.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
