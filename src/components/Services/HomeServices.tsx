import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
const HomeServices = () => {
  return (
    <section className="policy-area-02 section-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-1 order-lg-1 order-md-2">
            <div className="policy-thumb text-center">
              <Image
                className="moving-vertical"
                src={solution}
                alt="policy banner"
                width={583} // Adjust as needed
                height={634} // Adjust as needed
              />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 order-2 order-lg-2 order-md-1">
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
                      Ideas es to obtain pain of itself, because it is pain, but
                      because occasionally...
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
                      Ideas es to obtain pain of itself, because it is pain, but
                      because occasionally...
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
                      Ideas es to obtain pain of itself, because it is pain, but
                      because occasionally...
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
                      Ideas es to obtain pain of itself, because it is pain, but
                      because occasionally...
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
  );
};

export default HomeServices;
