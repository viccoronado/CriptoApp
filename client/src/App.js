//import logo from "./logo.svg";
import "./App.css";
import React from "react";
// eslint-disable-next-line 
import { BrowserRouter as Route } from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Home/>
      </React.Fragment>
    </div>
  );
}

export default App;
