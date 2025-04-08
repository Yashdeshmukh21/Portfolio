import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaCode, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { ImYahoo2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/", icon: <FaHome size={20} /> },
  { label: "ABOUT ME", to: "/about", icon: <FaUser size={20} /> },
  { label: "SKILLS", to: "/skills", icon: <FaCode size={20} /> },
  { label: "RESUME", to: "/resume", icon: <FaFileAlt size={20} /> },
  { label: "PORTFOLIO", to: "/portfolio", icon: <FaBriefcase size={20} /> },
  { label: "CONTACT", to: "/contact", icon: <FaEnvelope size={20} /> },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <ImYahoo2 size={40} />
        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className={`navbar__container__menu__item__links ${
                  location.pathname === item.to ? "active-link" : ""
                }`}
                to={item.to}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
