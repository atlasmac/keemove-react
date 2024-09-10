import React, { useState } from "react";
import logo from "../images/KeeMove_Logo.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaShoppingBasket,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHashLink } from "react-router-hash-link";
import DropdownMenu from "./DropDownMenu";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = React.useState(false);

  function handleScroll() {
    window.scrollY > 1 ? setIsHeaderActive(true) : setIsHeaderActive(false);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };
  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div>
      <header className={`main-header ${isHeaderActive ? "sticky" : ""}`}>
        <nav>
          <NavHashLink to="/#home" smooth>
            <img className="header-logo-main" src={logo} alt="logo" />
          </NavHashLink>
        </nav>
        <nav className="main-nav">
          <ul className="dropUl">
            <li className="dropdown">
              <button className="hamburger link">
                <GiHamburgerMenu />
              </button>
              <div className="dropdownMenu">
                <div className="dropdownLinks">
                  <NavHashLink to="/#about" smooth>
                    About
                  </NavHashLink>
                  <NavHashLink to="/help" smooth>
                    Who We Help
                  </NavHashLink>
                  <NavHashLink to="/WhatWeDo" smooth>
                    What We Do
                  </NavHashLink>
                  <NavHashLink to="/PatientTools" smooth>
                    Patient Tools
                  </NavHashLink>
                  <NavHashLink to="/Resources" smooth>
                    Resources
                  </NavHashLink>
                  <a
                    href="https://docs.google.com/forms/d/1yP2NDmQKfpHNo8y8tSvnl8ZmpsAqMLEV5RBGufAy2gQ/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Volunteer
                  </a>
                  <NavHashLink to="/#book" smooth>
                    Contact
                  </NavHashLink>
                </div>
              </div>
            </li>
          </ul>

          <ul className="links">
            <li className="links-li">
              <NavHashLink to="/#about" smooth>
                About
              </NavHashLink>
            </li>
            <li className="links-li drop">
              <NavHashLink
                to="/WhatWeDo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                smooth
              >
                What We Do
              </NavHashLink>
              {isDropdownVisible && (
                <DropdownMenu
                  items={[
                    "OT Evaluation and Treatment",
                    "Consultations, Speaking Engagements",
                    "Business Coaching",
                  ]}
                />
              )}
            </li>
            <li className="links-li drop">
              <NavHashLink
                to="/help"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                smooth
              >
                Who We Help
              </NavHashLink>
              {isDropdownVisible2 && (
                <DropdownMenu
                  items={[
                    "Sensory Processing",
                    "Fine Motor Skills",
                    "Gross Motor Skills",
                    "Visual Motor Skills",
                    "Executive Functioning",
                    "Emotional Regulation",
                    "Self-Care Skills",
                    "Cognitive Skills",
                  ]}
                />
              )}
            </li>
            <li className="links-li">
              <NavHashLink to="/PatientTools" smooth>
                Patient Tools
              </NavHashLink>
            </li>
            <li className="links-li">
              <NavHashLink to="/Resources/#resources" smooth>
                Resources
              </NavHashLink>
            </li>
            <li className="links-li">
              <a
                href="https://docs.google.com/forms/d/1yP2NDmQKfpHNo8y8tSvnl8ZmpsAqMLEV5RBGufAy2gQ/edit"
                target="_blank"
                rel="noreferrer"
              >
                Volunteer
              </a>
            </li>
            <li className="links-li">
              <NavHashLink to="/#book" smooth>
                Contact
              </NavHashLink>
            </li>
          </ul>

          <ul className="icons">
            <li>
              <a href="https://www.etsy.com/shop/keeMove">
                <FaShoppingBasket />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/themindbodyot/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/keemovellc">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/kee-move-llc/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
