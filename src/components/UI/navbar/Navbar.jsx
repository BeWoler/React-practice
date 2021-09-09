import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navbar">
      <MyButton onClick={logout}>Logout</MyButton>
      <div className="navbar__links">
        <Link to="/counter">Counter</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};

export default Navbar;
