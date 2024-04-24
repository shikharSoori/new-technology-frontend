import Image from "next/image";
import React from "react";

import Slider from "react-slick";
import zebraImg from "../../assets/zebra.png";
import wacomImg from "../../assets/wacom.png";
import hidImg from "../../assets/hid.png";
const Partners = () => {
  var brandSlider = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <section
      className="brand-logo-wrapper section-padding fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="sr-only">brand logo</h2>

            <Slider {...brandSlider}>
              <div className="brand-item">
                <a href="#">
                  <Image
                    src={hidImg}
                    alt="policy banner"
                    width={200} // Adjust as needed
                    height={150} // Adjust as needed
                  />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <Image
                    src={zebraImg}
                    alt="policy banner"
                    width={200} // Adjust as needed
                    height={400} // Adjust as needed
                  />
                </a>
              </div>
              <div className="brand-item h-100">
                <a href="#">
                  <Image
                    src={wacomImg}
                    alt="policy banner"
                    width={200} // Adjust as needed
                    height={400} // Adjust as needed
                  />
                </a>
              </div>
              <div className="brand-item">
                <a href="#">
                  <Image
                    src={hidImg}
                    alt="policy banner"
                    width={200} // Adjust as needed
                    height={150} // Adjust as needed
                  />
                </a>
              </div>
              <div className="brand-item h-100">
                <a href="#">
                  <Image
                    src={wacomImg}
                    alt="policy banner"
                    width={100} // Adjust as needed
                    height={150} // Adjust as needed
                  />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
