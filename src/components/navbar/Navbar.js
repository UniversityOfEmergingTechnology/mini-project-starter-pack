import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="gpt3_navbar">
        <div className="gpt3_navbar-links">
          <div className="gpt3_navbar-links_logo">
            <img src={logo} alt="Not found" />
          </div>
          <div className="gpt3_navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#gpt3">what is GPT3?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
        <div className="gpt3_navbar-sign">
          <p>Sign In</p>
          <button>Sign Up</button>
        </div>

        {/* for smaller screens */}
        <div className="gpt3_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#gpt3">What is GPT3?</a>
                </p>
                <p>
                  <a href="#possibility">Open AI</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>
              <div className="gpt3_navbar-menu-links-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
