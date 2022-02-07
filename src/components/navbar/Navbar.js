import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri/index";

import "./Navbar.css";
import logo from "../../assets/GPT-3.svg"

const Menu = () => {
  return (
    <>
    <p>
      <NavLink to="./home">Home</NavLink>
    </p>
    <p>
      <NavLink to="./wgpt3">What is GPT?</NavLink>
    </p>

    <p>
      <NavLink to="./possibilities">Open AI</NavLink>
    </p>

    <p>
      <NavLink to="./features">Case Studies</NavLink>
    </p>
    <p>
      <NavLink to="./blog">Library</NavLink>
    </p>
    </>
  )
  
}

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
    return (
      <div className="gtp3__navbar">
        <div className="gtp3__navbar-links">
          <div className="gtp3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gtp3__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="gtp3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gtp3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size="27"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size="27"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="gtp3__navbar-menu_container scale-up-center">
              <div className="gtp3__navbar-menu_container-links">
                <Menu />
                <div className="gtp3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Navbar;
