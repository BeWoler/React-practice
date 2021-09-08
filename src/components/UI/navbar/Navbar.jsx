import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link to="/counter">Counter</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};

export default Navbar;
