import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className=" text-4xl font-extrabold">{title}</h1>
      <p className="py-3 w-2/6 font-light">{overview}</p>
      <div className=" flex">
        <button className="flex items-center text-lg bg-white shadow-lg text-black hover:bg-opacity-70  font-semibold rounded-md border border-black p-2 m-2 px-6 cursor-pointer">
          <FaPlay className="text-2xl" />
          &nbsp; Play
        </button>
        <button className="flex items-center text-lg font-semibold shadow-lg  rounded-md   border border-slate-500 p-2 m-2 px-6 cursor-pointer text-white">
          <LuInfo className="text-2xl" />
          &nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
