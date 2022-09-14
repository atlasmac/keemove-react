import React from "react";
import {RiDoubleQuotesL,RiDoubleQuotesR} from "react-icons/ri"

export default function Testimonial({ colors }) {

  const slideShow = colors.map(el => {
    return (
      <div
        className="testimonial"
        key={el.id}
      >
        <div>
          <div className="quoteL"><RiDoubleQuotesL className="quote"/></div>
          <p>{el.content}</p>
          <div className="quoteR"><RiDoubleQuotesR className="quote"/></div>
        </div>
      </div>
    )
  })

  return (
    <div className="div">
        <h2>Testimonials</h2>
      <div className='inner-div test-div' >
          {slideShow}
      </div>

    </div>
  );
}