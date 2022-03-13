import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="hero__section">
      <Header />
      <div className="hero__container">
        <h1>
          We are revolutionizing <span>payments in africa</span>
        </h1>
        <p>
          a-pay is the all-in-one banking with payment cards and fintech
          experience for personal and business use.
        </p>
        <Link to="sign-up">
          <button className="hero__button">
            Get started <i className="fa-solid fa-arrow-trend-up"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
