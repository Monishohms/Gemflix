import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/Validate";
import { useRef } from "react";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { updateProfile } from "firebase/auth";
import Footer from "./Footer";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    // Validate The Form fields
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!signInForm) {
      //Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword
      //If the new account was created, the user is signed in automatically.

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          toast.success("You have been logged in !", {
            position: "top-center",
            theme: "dark",
            enter: "zoomIn",
            exit: "zoomOut",
          });

          updateProfile(user, {
            //Update a user's profile - You can update a user's basic profile information
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in existing user.

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("You have been logged in !", {
            position: "top-center",
            theme: "dark",
            enter: "zoomIn",
            exit: "zoomOut",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="BG-Logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 p-12 mx-auto right-0 left-0  bg-black text-white bg-opacity-80 "
      >
        <h1 className="py-4 font-extrabold text-3xl">
          {" "}
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter User Name"
            className=" w-full my-3 p-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email ID"
          className=" w-full my-3 p-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white "
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className=" w-full p-3 my-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white"
        />

        <p>{errorMessage}</p>

        <button
          className="cursor-pointer w-full my-3 p-2 font-bold bg-red-600 rounded-lg"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign up"}
        </button>

        <p className=" m-2 p-3 cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already an Netflix User? Sign In."}
        </p>

        <p className=" m-2 p-3 text-xs font-light opacity-70">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <b className="font-bold"> Learn more.</b>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
