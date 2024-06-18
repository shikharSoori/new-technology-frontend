"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import TitleText from "../Testimonials/TitleText";
import Link from "next/link";
import bg from "../../assets/innovationBg-removebg.png";
import AOS from "aos";
const MotoBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="testimonial-wrapper testimonial-wrapper--style_2   gray-bg"
      style={{ padding: "60px 0" }}
    >
      <div className="container wow fade-in-up">
        <div className="row align-items-center">
          <Image
            className=""
            data-aos="fade-left"
            style={{ position: "absolute", right: "0" }}
            src={bg}
            alt="bg"
            height={300}
          />
          <div
            className="col-9"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h2 className="h1 title" style={{ fontSize: "48px" }}>
              <TitleText
                title={`We are The <span>Innovation   </span> Corporate
             `}
              />
            </h2>
            <p className="my-4">
              Create some exclusive way to solve our customer problems Create
              some exclusive way to solve our customer problems Create some
              exclusive way to solve our customer problems exclusive way to
              solve our customer problems exclusive way to solve our customer
            </p>
            <Link href="/contact" className="btn btn-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoBanner;
