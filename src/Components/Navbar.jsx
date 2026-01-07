import { Link } from "react-router-dom";
import imgrefresher from "./images/logo.avif";
import "./Navbar.css";
import { useState } from "react";
import Header from "./Header";
import "./Styles/Navbar.css";

const Navbar = () => {
  
  const [data, setData] = useState(false);
  const [menu, setMenu] = useState(false);

  const inputhandler = () => {
    setData(!data); 
  };

  const menuhandler = () => {
    setMenu(!menu);
  };

  return (
    <>
    <Header />
    <div className="navbar_div">
      <div className="navbar_main">
        {/* Logo */}
        <div>
          <img src={imgrefresher} className="heading_logo" alt="Logo" />
        </div>

        {/* Navigation links */}
        <div className="Nav_links">
          <Link to="/" className="link">Home</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/privacy" className="link">Privacy</Link>
          <Link to="/signup" className="link">Signup</Link>
        </div>

        {/* Right-side icons */}
        <div className="bad_search">
          <span className="Search_icon">🔍</span>
          <span className="bag_icon">🛍️</span>
          <span className="menu_icon">☰</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
