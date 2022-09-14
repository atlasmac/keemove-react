import React from "react";

export default function Testimonial({ colors }) {

  const slideShow = colors.map(el => {
    return (
      <div
        className="testimonial"
        key={el.id}
      >
        <div>
          <p>{el.content}</p>
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