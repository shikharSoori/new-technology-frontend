import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";

const WhySoori = () => {
  return (
    <section
      className="blog-area section-padding pb-0 fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="h1 title w-100 mw-100">
                <span>Why</span> <br /> Soori Technology
              </h2>
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
                  because occasionallyght ocean he Internet tend to a chunks as
                  necessary with some of themoment
                </p>
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
                  because occasionallyght ocean he Internet tend to a chunks as
                  necessary with some of themoment
                </p>
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
                  because occasionallyght ocean he Internet tend to a chunks as
                  necessary with some of themoment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySoori;
