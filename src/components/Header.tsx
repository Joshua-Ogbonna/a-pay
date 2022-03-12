import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="shadow">
      <Logo className="company__brand" />
      <div className="first__section">
        <ul>
          <li>How it works</li>
          <li>Features</li>
          <li>Company</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="action__button">
        <button className="signup__button">
          <i className="fa-solid fa-user-plus"></i> Sign Up
        </button>
        <Link to="/login">
          <button className="login__button">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
