import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
      <ToastContainer />
    </div>
  );
};

export default App;
