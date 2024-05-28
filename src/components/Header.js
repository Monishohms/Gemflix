import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("./error");
      });
  };
  return (
    <div className="absolute flex items-center justify-between px-32 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div>
        <button className="cursor-pointer  " onClick={handleSignOut}>
          <FaSignOutAlt className="text-2xl text-red-600 shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
