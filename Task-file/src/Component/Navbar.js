import React, { useState } from "react";
import logo from "../Images/Key-software-inc.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="navigation">
        <div className="logo">
          <Link to="/" className="nav-link">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <button className="toggle-menu" onClick={handleToggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <div className="nav-list-type">
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" >
                    {" "}
                    <Link to="/Heathcare" className="nav-link">
                      {" "}
                      Healthcare Data Management
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    {" "}
                    <Link to="/Claimscare" className="nav-link">
                      {" "}
                      Claims Automation
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    {" "}
                    <Link to="/Utiliziemanange" className="nav-link">
                      {" "}
                      Utilization Management
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    {" "}
                    <Link to="/Consultingcare" className="nav-link">
                      Healthcare Consulting
                    </Link>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
