import React from "react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home-div" id="home">
      <div>
        <h1>Turning struggles into strengths</h1>
        <HashLink to="/#book" smooth>
          Book With Us
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
