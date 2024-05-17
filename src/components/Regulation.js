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
              Sensory Processing: We offer tailored interventions to help
              clients process and respond to sensory information more
              effectively, promoting improved attention, behavior, and
              self-regulation.
            </li>
            <li>
              Fine Motor Skills: Raeleah works closely with clients to enhance
              their hand-eye coordination, dexterity, and grip strength,
              enabling them to excel in activities like writing, drawing, and
              using utensils.
            </li>
            <li>
              Gross Motor Skills: Through fun and engaging activities, Raeleah
              helps clients improve their balance, coordination, and overall
              body awareness, fostering greater confidence and participation in
              physical activities.
            </li>
            <li>
              Visual Motor Skills: Raeleah focuses on developing the connection
              between visual perception and motor skills, enhancing a person's
              ability to complete tasks that require hand-eye coordination and
              visual processing.
            </li>
            <li>
              Executive Functioning: We provide strategies to manage ADHD and
              improve organizational skills, planning, time management, and
              impulse control, empowering clients to succeed in academic and
              other everyday tasks.
            </li>
            <li>
              Emotional Regulation: Raeleah teaches clients techniques to manage
              their anxiety, emotions, cope with stress, and develop resilience,
              promoting improved social interactions and emotional well-being.
            </li>
            <li>
              Self-Care Skills: Raeleah works with clients to develop
              independence in daily activities such as dressing, grooming, and
              feeding, fostering a sense of accomplishment and self-confidence.
            </li>
            <li>
              Cognitive Skills: Through engaging activities and games, Raeleah
              helps clients improve their cognitive abilities, including
              problem-solving, flexibility and attention.
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
