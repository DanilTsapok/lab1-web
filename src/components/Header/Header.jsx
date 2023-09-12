import React from "react";
import "./header-style.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <a className="item" href="#">
            Create an account
          </a>
          <a className="item" href="#">
            How it works
          </a>
          <a className="item" href="#">
            Support
          </a>
          <a className="item" href="#">
            FAQ
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
