import Image from "next/image";
import React from "react";
import Slider from "@/components/Carousel/Carousel";
import solution from "../../assets/Solution.png";

import { getData } from "@/app/lib/getData";

const Testimonials = async () => {
  var testimonialSlider = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const data = await getData(`about-us-app/ceo-message`);
  const testimonials = data.results;

  return (
    <section className="testimonial-wrapper testimonial-wrapper--style_2 gray-bg section-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-5 order-1 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="testimonial-inner mt-0">
              <h2 className="h1 title">
                What <span>Client’s</span> say <br /> happy reviews{" "}
              </h2>
              <h3 className="subtitle">
                Create some exclusive way to solve our customer problems
              </h3>

              <Slider {...testimonialSlider}>
                {testimonials?.map((testimonial: any) => {
                  return (
                    <div
                      key={testimonial.id}
                      className="testimonial-item testimonial-item--style_2 "
                    >
                      <div className="testimonial-content">
                        <p>{testimonial.description}</p>
                        <h5 className="client-name">{testimonial.name}</h5>
                        <h6 className="client-desig">
                          {testimonial.designation},{testimonial.companyName}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7  order-2 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="testimonial-thumb testimonial-thumb--style_2">
              <Image
                src={solution}
                alt="policy banner"
                className="moving-vertical"
                width={583} // Adjust as needed
                height={634} // Adjust as needed
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
