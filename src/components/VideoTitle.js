import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className=" text-4xl font-extrabold">{title}</h1>
      <p className="py-3 w-2/5 font-light">{overview}</p>
      <div className=" flex">
        <button className="flex items-center text-lg bg-white text-black hover:bg-opacity-80 font-semibold rounded-md border border-black p-2 m-2 px-6 cursor-pointer">
          <FaPlay className="text-2xl" />
          &nbsp; Play
        </button>
        <button className="flex items-center text-lg font-semibold rounded-md border hover:bg-opacity-80 border-black p-2 m-2 px-6 cursor-pointer bg-gray-500  text-white">
          <LuInfo className="text-2xl" />
          &nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
