"use client";
import { getData } from "./lib/getData";
import Image from "next/image";
import Slider from "react-slick";
import CountUp from "react-countup";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import solution from "../assets/Solution.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import why1 from "../assets/icon-4.png";
import why2 from "../assets/icon-4.png";
import why3 from "../assets/why3.avif";

// Counter component with delayed animation

const Count = ({ number, title, duration }: any) => {
  return (
    <div className="number odometer h1">
      <CountUp
        duration={duration}
        className="counter  odometer h1"
        end={number}
      />
      <span>{title}</span>
    </div>
  );
};
const Home = () => {
  // const data = getData("product-app/our-partner");
  function SampleNextArrow() {
    return <button type="button" className="slick-next"></button>;
  }

  function SamplePrevArrow() {
    return <button type="button" className="slick-prev"></button>;
  }
  var settings = {
    // speed: 1000000,
    dots: true,
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
    <>
      <section className="hero-slider hero-transparent-bg bg-img fix">
        <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
          <Slider {...settings}>
            <div>Hello</div>
            <div>Hello</div>
          </Slider>
        </div>
      </section>
      <section
        className="funfacts-section fix wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title section-title--style_2 text-center">
                <h2 className="h1 title">
                  Sucessfully <span>completed</span> 2100+ <span>projects</span>{" "}
                  with numbers of satisfied client
                </h2>
              </div>
            </div>
          </div>
          <div className="row mtn-40">
            <div className="col-md-3 col-sm-6">
              <div className="counterup-item mt-40">
                <Count
                  className="odometer h1"
                  duration={10}
                  number={100}
                  title="+"
                />
                <h5>Satisfied Clients</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counterup-item mt-40">
                <span className="odometer h1" data-count="950"></span>
                <h5>Completed Projects</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counterup-item mt-40">
                <span className="odometer h1" data-count="600"></span>
                <h5>Cup Coffee</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counterup-item mt-40">
                <span className="odometer h1" data-count="95 "></span>
                <h5>Awards Winning</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="policy-area-02 section-padding fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-1 order-lg-1">
              <div className="policy-thumb text-center">
                <Image
                  className="moving-vertical"
                  src={solution}
                  alt="policy banner"
                  width={541} // Adjust as needed
                  height={541} // Adjust as needed
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 order-2 order-lg-2">
              <div className="row">
                <div className="col-12">
                  <div className="section-title  ml-lg-0">
                    <h2 className="h1 title">Services that we provide</h2>
                    <p className="p-0 text-lg-left">
                      labore dolore magnam aliquam quaerat voluptatem ad minima
                      veniam, quis nostrum exercitationem
                    </p>
                  </div>
                </div>
              </div>
              <div className="policy-wrapper-02">
                <div className="row mtn-10 no-gutters">
                  {/* Repeat for each service-policy-item */}
                  <div className="col-md-6">
                    <div className="service-policy-item mt-10">
                      <div className="service-policy-icon">
                        <Image src={icon1} alt="icon" width={50} height={50} />
                      </div>
                      <h3 className="service-policy-title">Creative Ideas</h3>
                      <p className="service-policy-desc">
                        Ideas es to obtain pain of itself, because it is pain,
                        but because occasionally...
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-policy-item mt-10">
                      <div className="service-policy-icon">
                        <Image src={icon2} alt="icon" width={50} height={50} />
                      </div>
                      <h3 className="service-policy-title">Creative Ideas</h3>
                      <p className="service-policy-desc">
                        Ideas es to obtain pain of itself, because it is pain,
                        but because occasionally...
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-policy-item mt-10">
                      <div className="service-policy-icon">
                        <Image src={icon3} alt="icon" width={50} height={50} />
                      </div>
                      <h3 className="service-policy-title">Creative Ideas</h3>
                      <p className="service-policy-desc">
                        Ideas es to obtain pain of itself, because it is pain,
                        but because occasionally...
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-policy-item mt-10">
                      <div className="service-policy-icon">
                        <Image src={icon4} alt="icon" width={50} height={50} />
                      </div>
                      <h3 className="service-policy-title">Creative Ideas</h3>
                      <p className="service-policy-desc">
                        Ideas es to obtain pain of itself, because it is pain,
                        but because occasionally...
                      </p>
                    </div>
                  </div>
                  {/* Repeat similar blocks for other service-policy-items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="blog-area section-padding pb-0 fix wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="h1 title">Latest Post from Blog</h2>
                <p>
                  labore dolore magnam aliquam quaerat voluptatem ad minima
                  veniam, quis nostrum exercitationem
                </p>
              </div>
            </div>
          </div>
          <div className="row mtn-30">
            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <Image
                      src={solution}
                      alt="policy banner"
                      width={370} // Adjust as needed
                      height={250} // Adjust as needed
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="blog-details.html">Themoment neceary</a>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <a href="#">25 October, 2019</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <Image
                      src={solution}
                      alt="policy banner"
                      width={370} // Adjust as needed
                      height={250} // Adjust as needed
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="blog-details.html">Beneficial strategies</a>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <a href="#">25 October, 2019</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <Image
                      src={solution}
                      alt="policy banner"
                      width={370} // Adjust as needed
                      height={250} // Adjust as needed
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="blog-details.html">Because occasional</a>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <a href="#">25 October, 2019</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
