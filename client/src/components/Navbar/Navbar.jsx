import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="home">
        <Link to="/home">
          <h2>Home</h2>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
      <div className="back">
        <Link to="/">
          <h2>Back to start</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
