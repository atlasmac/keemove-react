import React from "react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home-div" id="home">
      <div>
        <h1>
          We help kids and adults manage ADHD, anxiety, and sensory needs so
          everyday tasks feel easier and life feels more fun.
        </h1>
        <HashLink to="/#book" smooth>
          Book With Us
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
