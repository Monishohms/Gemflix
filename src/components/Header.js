import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { SiOpenai } from "react-icons/si";
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
      .then(() => {})
      .catch((error) => {
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
    <div className="absolute z-10  flex items-center justify-between px-32 py-2 bg-gradient-to-b from-black from-40% to-transparent  w-full">
      <img className="w-48" src={LOGO_URL} alt="logo" />

      <div className=" flex items-center">
        <button
          onClick={handleGptSearch}
          className="cursor-pointer flex items-center rounded-lg  border mr-20 p-3 text-white font-bold  bg-black"
        >
          {gptStatus ? (
            <>
              <FaHouse className="mr-2 font-bold text-lg text-green-300" />
              Home Page
            </>
          ) : (
            <>
              <SiOpenai className="mr-2 font-bold text-lg text-green-300" /> AI
              SEARCH
            </>
          )}
        </button>
        <button className="cursor-pointer " onClick={handleSignOut}>
          <FaSignOutAlt className="text-3xl text-red-600 shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
