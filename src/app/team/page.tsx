"use client";
import React from "react";
import Slider from "react-slick";
import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
import solution from "../../assets/Solution.png";

const Team = () => {
  var teamSlider = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <div>
      <AboutHero title={"Team"} />
      <section className="team-wrapper team-wrapper--style_3 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4 text-center">
                <h2 className="h1 title">Our Creative Team</h2>
                <p>
                  labore dolore magnam aliquam quaerat voluptatem ad minima
                  veniam, quis nostrum exercitationem
                </p>
              </div>
            </div>
          </div>
          <div className="team-member-inner">
            <Slider {...teamSlider} className="team-slider">
              <div className="team-member team-member--hover-effect ">
                <div className="team-member-info">
                  <h5 className="team-member-name">Roberto Sonax</h5>
                  <h6 className="team-member-desig">Chief Executive</h6>
                </div>
                <Image
                  src={solution}
                  alt="policy banner"
                  className="moving-vertical"
                  width={400} // Adjust as needed
                  height={400} // Adjust as needed
                />
              </div>
              <div className="team-member team-member--hover-effect ">
                <div className="team-member-info">
                  <h5 className="team-member-name">Roberto Sonax</h5>
                  <h6 className="team-member-desig">Chief Executive</h6>
                </div>
                <Image
                  src={solution}
                  alt="policy banner"
                  className="moving-vertical"
                  width={400} // Adjust as needed
                  height={400} // Adjust as needed
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
