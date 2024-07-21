import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_API_KEY } from "../utils/Constant";
import { API_options } from "../utils/Constant";
import { addGptMovieResults, toggleLoading } from "../utils/gptSearchSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const movieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data?.json();
    return json?.results;
  };

  const handleGptSearch = async () => {
    dispatch(toggleLoading());
    //console.log(searchText.current.value);

    const genAI = new GoogleGenerativeAI(OPEN_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const query =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "give me only the names of top 5 movies with comma separated like the example results given ahead. Example Results: Gadar, Don, Golmaal, MS Dhoni, rise of the planet of the ape";
    const prompt = query;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().split(",");
    //console.log(text);

    const promiseArray = text?.map((movie) => movieSearch(movie));

    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(
      addGptMovieResults({ movieNames: text, movieResults: tmdbResults })
    );
    dispatch(toggleLoading());
  };

  return (
    <div>
      <img
        className="fixed -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="BG-Logo"
      />
      <div className="flex items-center justify-center shadow-xl ">
        <form
          className="border flex justify-between shadow-xl mt-40 w-1/2 rounded-lg "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder="What are you looking for today...?"
            className="p-3 rounded-l-lg text-center w-full outline-none  font-bold "
          />
          <button
            className="rounded-r-lg flex  items-center font-bold text-white w-20 p-2 bg-red-700 hover:bg-red-800 active:bg-red-900 outline-none"
            onClick={handleGptSearch}
          >
            &nbsp;&nbsp;&nbsp; <BsSearch className="font-extrabold text-4xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
