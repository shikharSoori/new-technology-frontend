import React from "react";

const TestimonialContent = (testimonial: any) => {
  return (
    <div className="testimonial-item testimonial-item--style_2 ">
      <div className="testimonial-content">
        <p>{testimonial?.description}</p>
        <h5 className="client-name">{testimonial?.name}</h5>
        <h6 className="client-desig">
          {testimonial?.designation}, {testimonial?.designation}
        </h6>
      </div>
    </div>
  );
};

export default TestimonialContent;
