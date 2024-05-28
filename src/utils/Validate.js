import { RxCrossCircled } from "react-icons/rx";
import React from "react";
export const checkValidData = (email, password) => {
  const isValidEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
    email
  );

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail)
    return (
      <React.Fragment>
        <div className=" flex items-center font-bold text-sm text-red-700">
          <RxCrossCircled className="text-lg " />
          &nbsp;Invalid email id.
        </div>
      </React.Fragment>
    );

  if (!isValidPassword)
    return (
      <React.Fragment>
        <div className=" flex items-center font-bold text-sm text-red-700">
          <RxCrossCircled className="text-lg " />
          &nbsp;Invalid password.
        </div>
      </React.Fragment>
    );

  return null;
};
