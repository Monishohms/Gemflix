import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { SiGooglegemini } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptStatus = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("You have been logged out !", {
          position: "top-center",
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.warning("error occured", {
          position: "top-center",
          theme: "dark",
        });
        navigate("/error");
      });
  };

  useEffect(() => {
    // To Get the currently signed-in user
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        const uid = user.uid;
        const displayName = user.displayName;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unSubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute z-10  flex items-center justify-between px-10 md:px-32 py-2 bg-gradient-to-b from-black from-40% to-transparent  w-full">
      <img className="w-32 md:w-48" src={LOGO_URL} alt="logo" />

      <div className=" flex items-center">
        {auth.currentUser && (
          <button
            onClick={handleGptSearch}
            className="cursor-pointer flex items-center rounded-lg  border p-1 mr-9 md:mr-20 md:p-3 text-white font-bold  bg-black active:border-blue-300"
          >
            {gptStatus ? (
              <>
                <FaHouse className="mr-2 font-bold text-xl bg-red-500 rounded-lg" />
                Home Page
              </>
            ) : (
              <>
                <SiGooglegemini className="text-lg mr-2 md:font-bold md:text-xl text-blue-500 bg-white rounded-xl" />
                AI SEARCH
              </>
            )}
          </button>
        )}
        {auth.currentUser && (
          <button className="cursor-pointer " onClick={handleSignOut}>
            <FaSignOutAlt className="text-2xl md:text-3xl text-red-500 hover:text-red-600 active:text-red-700 shadow-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
