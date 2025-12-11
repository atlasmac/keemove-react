import React from "react";
import Slideshow from "./Slideshow";
import images from "../images.json";
import CalendlyButton from "./CalendlyButton";

const Regulation = () => {
  return (
    <div className="div">
      <div className="inner-div consultation">
        <h2>Who We Help</h2>
        <Slideshow colors={images} />
        <div className="con-div">
          <p>
            Welcome to KeeMove, an occupational therapy practice based in
            Missoula, MT where we focus on supporting the mind and body. We are
            dedicated to helping adults, adolescents and children thrive by
            addressing a variety of areas, including:{" "}
          </p>
          <ul>
            <li>
              <span className="subtitle">Sensory Processing:</span> We offer
              tailored interventions to help clients process and respond to
              sensory information more effectively, promoting improved
              attention, behavior, and self-regulation.
            </li>
            <li>
              <span className="subtitle">Fine Motor Skills:</span> Raeleah works
              closely with clients to enhance their hand-eye coordination,
              dexterity, and grip strength, enabling them to excel in activities
              like writing, drawing, and using utensils.
            </li>
            <li>
              <span className="subtitle">Gross Motor Skills:</span> Through fun
              and engaging activities, Raeleah helps clients improve their
              balance, coordination, and overall body awareness, fostering
              greater confidence and participation in physical activities.
            </li>
            <li>
              <span className="subtitle">Visual Motor Skills:</span> Raeleah
              focuses on developing the connection between visual perception and
              motor skills, enhancing a person's ability to complete tasks that
              require hand-eye coordination and visual processing.
            </li>
            <li>
              <span className="subtitle">Executive Functioning:</span> We
              provide strategies to manage ADHD and improve organizational
              skills, planning, time management, and impulse control, empowering
              clients to succeed in academic and other everyday tasks.
            </li>
            <li>
              <span className="subtitle">Emotional Regulation:</span> Raeleah
              teaches clients techniques to manage their anxiety, emotions, cope
              with stress, and develop resilience, promoting improved social
              interactions and emotional well-being.
            </li>
            <li>
              <span className="subtitle">Self-Care Skills:</span> Raeleah works
              with clients to develop independence in daily activities such as
              dressing, grooming, and feeding, fostering a sense of
              accomplishment and self-confidence.
            </li>
            <li>
              <span className="subtitle">Cognitive Skills:</span> Through
              engaging activities and games, Raeleah helps clients improve their
              cognitive abilities, including problem-solving, flexibility and
              attention.
            </li>
          </ul>
          <p>
            Raeleah is committed to providing individualized care that meets the
            unique needs of each client, helping them feel more confident in
            their physical, sensory and social-emotional needs. Contact us today
            to learn more about our services and how we can support you or your
            child.
          </p>
          <CalendlyButton />
        </div>
      </div>
    </div>
  );
};

export default Regulation;
