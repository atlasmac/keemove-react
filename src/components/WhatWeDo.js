import React from "react";
import CalendlyButton from "./CalendlyButton";

const WhatWeDo = () => {
  return (
    <div className="div">
      <div className="inner-div consultation">
        <h2>What We Do</h2>
        <div className="con-div">
          <p>
            At KeeMove, we offer a range of services to meet the unique needs of
            our clients. Our services include:{" "}
          </p>
          <ul>
            <li>
              <span className="subtitle">
                Occupational Therapy Evaluation and Treatment:
              </span>{" "}
              We provide comprehensive evaluations and evidence-based treatment
              plans to address various challenges. Please note that a referral
              with an OT-related diagnosis is required for insurance billing.
            </li>
            <li>
              <span className="subtitle">Treatment Options:</span> Clients can
              choose from in-home visits, virtual sessions, or sessions at our
              office located at a therapeutic riding center, providing
              flexibility and convenience.
            </li>
            <li>
              <span className="subtitle">Consultations:</span> Raeleah offers
              in-home and virtual consultations to educate families on general
              environmental modifications and at-home strategies. No
              individualized medical advice provided.
            </li>
            <li>
              <span className="subtitle">Speaking Engagements:</span> With
              experience in teaching parenting education classes on listening
              and helping kids manage stress, Raeleah offers engaging and
              informative talks to schools, organizations, and groups.
            </li>
            <li>
              <span className="subtitle">Business Coaching:</span> Raeleah built
              up her private practice and was able to transition to KeeMove
              full-time in less than a year. She provides business coaching
              services to guide other therapists in their private practice
              journey to help save them time and money.
            </li>
          </ul>
          <p>
            Contact us today to learn more about how we can support your child’s
            goals, your personal goals or your professional goals.
          </p>
          <CalendlyButton />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
