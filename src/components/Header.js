import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/Constant";

const Header = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className="absolute flex items-center justify-between px-32 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-48" src={LOGO_URL} alt="logo" />

      <div>
        <button className="cursor-pointer  " onClick={handleSignOut}>
          <FaSignOutAlt className="text-3xl text-red-600 shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
