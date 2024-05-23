import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
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

      <form className="absolute w-3/12 my-36 p-12 mx-auto right-0 left-0  bg-black text-white bg-opacity-80 ">
        <h1 className="py-4 font-extrabold text-3xl">
          {" "}
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Enter User Name"
            className=" w-full my-3 p-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white "
          />
        )}
        <input
          type="text"
          placeholder="Enter Email ID"
          className=" w-full my-3 p-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white "
        />
        <input
          type="password"
          placeholder="Enter Password"
          className=" w-full p-3 my-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white"
        />
        {!signInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className=" w-full p-3 my-3 rounded-lg bg-black bg-opacity-20 border-solid border border-white"
          />
        )}
        <button className="cursor-pointer w-full my-3 p-2 font-bold bg-red-600 rounded-lg">
          {" "}
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
    </div>
  );
};

export default Login;
