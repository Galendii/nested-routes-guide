import React from "react";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
