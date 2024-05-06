import Image from "next/image";
import React from "react";
import Slider from "@/components/Carousel/Carousel";
import solution from "../../assets/Solution.png";
import { getData } from "@/app/lib/getData";
import Link from "next/link";

const HomeHero = async () => {
  const data = await getData(`core-app/banner-images`);
  const heroContent = data.results;
  console.log(heroContent);
  function SampleNextArrow() {
    return <button type="button" className="slick-next"></button>;
  }

  function SamplePrevArrow() {
    return <button type="button" className="slick-prev"></button>;
  }
  var settings = {
    dots: false,
    arrows: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="hero-slider hero-transparent-bg bg-img fix">
      <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        <Slider {...settings}>
          {heroContent?.map((hero: any) => {
            return (
              <div key={hero.id} className="hero-single-slide">
                <div className="hero-slider-item">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-5 col-sm-6">
                        <div className="hero-slider-content">
                          <h1 className="slide-title">{hero.name}</h1>
                          <Link href="/about" className="btn btn-hero">
                            Read More
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-7 col-sm-6">
                        <div className="slider-thumb moving-vertical">
                          <Image
                            src={hero.image}
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
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default HomeHero;
