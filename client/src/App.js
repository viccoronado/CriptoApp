//import logo from "./logo.svg";
import "./App.css";
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      </React.Fragment>
    </div>
  );
}

export default App;
