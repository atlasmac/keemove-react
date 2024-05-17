import React from "react";
import CalendlyButton from "./CalendlyButton";

const PatientTools = () => {
  return (
    <div className="div">
      <div className="inner-div consultation">
        <h2>Patient Tools</h2>

        <a
          href="https://app.fusionwebclinic.com/portal/keemove"
          className="btn"
        >
          Existing Patient Portal
        </a>
        <div className="con-div">
          <h3>New Patient</h3>
          <p>Are you considering our services? Here's how to get started.</p>
          <ul>
            <li>
              Contact our office via phone, email, website contact form OR book
              a virtual consultation appointment.
            </li>
            <li>
              Insurance: We accept most major insurances. Please note that a
              physician referral with an OT-related diagnosis is required for
              insurance billing. To request a referral, contact your primary
              care physician or your child’s pediatrician and have them fax a
              referral to us at 406-519-0626.
            </li>
            <li>
              We will collect relevant information to determine if our services
              are the right fit for you or your child. We look forward to
              hearing from you!
            </li>
          </ul>
          <br />
          <br />
          <CalendlyButton />
          <h3>Payment Options and Fees</h3>
          <p>
            If you choose to have your insurance billed for your service, our
            biller will bill your insurance. Once the bill has been reviewed by
            your insurance, you will receive a bill 30-60 days after your
            appointment for the remaining portion owed. If you have a
            deductible, the deductible has to be met before your insurance will
            cover services rendered. You are responsible for all charges and
            expected to make monthly payments. Payments can be made over the
            phone to our biller or on the portal. The portal will not reflect an
            updated balance but is used for convenience.
          </p>
          <p>
            Insurance billing questions can be directed to Back Office
            Solutions, LLC at 406-721-6701.
          </p>
          <p>
            Private Pay: We offer a 20% discount for claims billed for private
            pay clients.{" "}
          </p>
          <p>
            Virtual Consultation: We offer a $75-125/hour sliding scale fee for
            virtual consultation appointments and ask that families pay what
            they are able to within that range.
          </p>
          <p>In-Home consultation: $125/hour plus travel fees.</p>
          <p>Speaking Engagement: Fees to be negotiated. </p>
          <p>
            Business coaching: We offer a $75-125/hour sliding scale fee for
            business coaching appointments and ask that individuals pay what
            they are able to within that range.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientTools;
