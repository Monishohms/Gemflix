import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import { Bars } from "react-loading-icons";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  const loading = useSelector((store) => store.gpt.loading);
  return (
    <div className="min-h-full px-[4%] py-[2%]">
      {!loading ? (
        <div className="w-full h-full pl-4 backdrop-blur-lg ">
          {movieNames?.map((movieName, index) => (
            <MoviesList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      ) : (
        <div className="pl-[45%] pt-[10%] w-full h-screen backdrop-blur-lg">
          <Bars />
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
