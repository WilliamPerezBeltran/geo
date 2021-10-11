import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.scss";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/list" className="nav-links" onClick={closeMobileMenu}>
              List
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/me" className="nav-links" onClick={closeMobileMenu}>
              me
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/map" className="nav-links" onClick={closeMobileMenu}>
              Map
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
