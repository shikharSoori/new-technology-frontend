import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import solution from "../../assets/Solution.png";

const HomeHero = () => {
  function SampleNextArrow() {
    return <button type="button" className="slick-next"></button>;
  }

  function SamplePrevArrow() {
    return <button type="button" className="slick-prev"></button>;
  }
  var settings = {
    // speed: 1000000,
    dots: false,
    // addaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    // ],
  };
  return (
    <section className="hero-slider hero-transparent-bg bg-img fix">
      <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        <Slider {...settings}>
          <div className="hero-single-slide">
            <div className="hero-slider-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="hero-slider-content">
                      <h1 className="slide-title">
                        Great Plan to increase your Business
                      </h1>
                      <a href="about.html" className="btn btn-hero">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-sm-6">
                    <div className="slider-thumb moving-vertical">
                      <Image
                        src={solution}
                        alt="policy banner"
                        className="moving-vertical"
                        width={669} // Adjust as needed
                        height={486} // Adjust as needed
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-single-slide">
            <div className="hero-slider-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="hero-slider-content">
                      <h1 className="slide-title">
                        Great Plan to increase your Business
                      </h1>
                      <a href="about.html" className="btn btn-hero">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-sm-6">
                    <div className="slider-thumb moving-vertical">
                      <Image
                        src={solution}
                        alt="policy banner"
                        className="moving-vertical"
                        width={699} // Adjust as needed
                        height={486} // Adjust as needed
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeHero;
