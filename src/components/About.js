import React from "react";
import profile from "../images/raeleahProfile.png";
import mari from "../images/mari.jpeg";
import kayla from "../images/kayla.jpeg";

const About = () => {
  return (
    <div className="div" id="about">
      <div className="inner-div">
        <h2>Meet Raeleah Schaeffer, MOT, OTR/L</h2>
        <h3>Occupational Therapist, Kee Move Founder</h3>
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
              <a
                href="https://certificates.nbcot.org/3dc2ad93-9602-48b4-b873-8b5a85c68171#acc.l2LKU0rM"
                target="_blank"
                rel="noopener noreferrer"
              >
                View NBCOT Badge
              </a>
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
      {/* new section Meet Kayla Bridges-Payne, OTS */}
      <div className="inner-div">
        <h2>Meet Kayla Bridges-Payne, OTS</h2>
        <h3>Occupational Therapy Student, Kee Move Office Manager</h3>
        <div className="about-div">
          <div>
            <div className="img-div">
              <img className="bio-img" src={kayla} alt="profile" />
            </div>
            <div className="bio">
              <h3>Education</h3>
              <ul>
                <li>
                  <b>
                    Bachelor of Arts in Psychology and Human Family Development
                  </b>
                  , University of Montana
                </li>
                <li>
                  <b>Pursuing an occupational therapy degree</b>, University of
                  Montana
                </li>
              </ul>
            </div>
          </div>
          <div className="bio">
            <h3>About</h3>
            <p>
              Hello, my name is Kayla and I am currently a first year
              occupational therapy student at the University of Montana. My
              career goal is to become an early intervention or NICU
              occupational therapist, where I would like to help promote healthy
              development within early childhood, while providing families with
              the tools to do the same.{" "}
            </p>
            <p>
              I started at KeeMove as an intern in Fall 2024 as I conducted my
              capstone research on equine-assisted occupational therapy. Shortly
              after my internship ended I was hired on as the Office Manager
              where I handle administrative tasks, documentation, communication,
              and volunteers.
            </p>
            <p>
              I grew up around horses and truly believe that the services
              offered here at KeeMove that incorporate the use of horses into
              the treatment process is very unique and provides wonderful
              opportunities for children who are seeking occupational therapy.
            </p>
            <p>
              In my free time I enjoy playing tennis, writing music, staying
              active, and spending time with my dog Boomerang.
            </p>
          </div>
        </div>
      </div>
      {/* new section  */}
      <div className="inner-div">
        <h2>Meet Mari Bouzis</h2>
        <h3>Kee Move Admin Assistant</h3>
        <div className="about-div">
          <div>
            <div className="img-div">
              <img className="bio-img" src={mari} alt="profile" />
            </div>
            <div className="bio">
              <h3>Education</h3>
              <ul>
                <li>
                  <b>
                    Pursuing a degree in Integrative Physiology and a minor in
                    Business Administration
                  </b>
                  , University of Montana
                </li>
              </ul>
            </div>
          </div>
          <div className="bio">
            <h3>About</h3>
            <p>
              My name is Mari and I am an undergraduate student at the
              University of Montana. My career goal is to become an Occupational
              Therapist because I want to help people regain confidence,
              independence and meaning in daily life.
            </p>
            <p>
              At Kee Move Occupational Therapy, I assist with administrative
              tasks, documentation, and equine-assisted therapy sessions. I am
              especially interested in how Occupational Therapy supports
              individuals emotionally and physically. My academic background in
              anatomy, physiology, and psychology allows me to connect the
              science of the body and brain through Occupational Therapy.
            </p>
            <p>
              Outside of my studies, I enjoy outdoor activities, seeing new
              places, and being around my friends. I think it is important to
              stay active and maintain balance in life, which allows me to bring
              energy, focus, and positivity into the work I do with others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
