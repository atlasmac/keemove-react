import React from "react";
import profile from "../images/raeleahProfile.png";

const About = () => {
  return (
    <div className="div" id="about">
      <div className="inner-div">
        <h2>Raeleah Schaeffer, MOT, OTR/L</h2>
        <div className="about-div">
          <div>
            <div className="img-div">
              <img className="bio-img" src={profile} alt="profile" />
            </div>
            <div className="bio">
              <h3>Education</h3>
              <ul>
                <li>
                  <b>Bachelor of Science in Rehabilitation Psychology</b>,
                  University of Wisconsin, Madison
                </li>
                <li>
                  <b>Master of Occupational Therapy</b>, Carroll University
                </li>
              </ul>
              <a href="https://bcert.me/sdoclukqp">NBCOT Badge</a>
            </div>
          </div>
          <div className="bio">
            <h3>About</h3>
            <p>
              As a nationally board certified and MT licensed occupational
              therapist, I specialize in helping clients manage ADHD, anxiety,
              sensory sensitivities and motor delays. I work with kids and
              adults with some or all of the above concerns so that you can feel
              more organized, calm and in control of your daily life.{" "}
            </p>
            <p>
              My approach emphasizes collaborating with clients and parents to
              develop creative strategies that enhance their physical and mental
              well-being in various environments. I enjoy finding ways to
              incorporate clients' interests into therapy to make it more
              engaging and personalized.{" "}
            </p>
            <p>
              Outside of OT, I enjoy running, skiing, golf and other outdoor
              activities. I believe in the importance of self-confidence and aim
              to help clients develop the skills they need to succeed and feel
              more confident in themselves.
            </p>
            <p>
              See if occupational therapy is the right fit for you or your
              child!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
