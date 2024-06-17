import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import aeroplane from "../../assets/svg/aeroplane.svg";
import ladder from "../../assets/ladder.png";
import { getData } from "@/app/lib/getData";
import SingleServices from "./Services";
import TitleText from "../Testimonials/TitleText";
const HomeServices = async () => {
  const data = await getData(`solution-app/solution`);
  const services = data.results;
  // const [expandedCardIndices, setExpandedCardIndices] = useState([]);

  return (
    <section className="policy-area-02 section-padding gray-bg fix">
      <div className="container">
        <div className="section-title mb-4 text-center">
          <h2 className="h1 title">
            <TitleText title="Our <span>Software</span> Products" />
          </h2>
          <p>
            With a versatile portfolio, we serve a wide array of industries,
            including manufacturing, healthcare, retail, logistics, and beyond,
            ensuring efficient operations and growth.
          </p>
        </div>
        <div className=" feature_row" style={{ paddingTop: "60px" }}>
          <div className="feature_slider_inner row">
            <div className="item col-3">
              <div
                className="feature_s_item"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 56, 102, 0.78) 0%, rgba(0, 0, 0, 0) 45.5%), url(${ladder.src}) center / cover no-repeat`,
                }}
              >
                <Image alt="" className="svg social-link" src={aeroplane} />
                <a href="#">
                  <h4>CUBIX</h4>
                </a>
                <p>
                  Phosfluorescently enhance 24/7 resources through distributed
                  materials. Distinctively incubate cross-media bandwidth for
                  sticky platforms.
                </p>
              </div>
            </div>
            <div className="item col-3">
              <div
                className="feature_s_item"
                style={{
                  background: `linear-gradient(0deg, #742d34 0%, rgba(0, 0, 0, 0) 45.5%), url(${ladder.src}) center / cover no-repeat`,
                }}
              >
                <Image alt="" className="svg social-link" src={aeroplane} />
                <a href="#">
                  <h4>ON SERVICE</h4>
                </a>
                <p>
                  Phosfluorescently enhance 24/7 resources through distributed
                  materials. Distinctively incubate cross-media bandwidth for
                  sticky platforms.
                </p>
              </div>
            </div>
            <div className="item col-3">
              <div
                className="feature_s_item"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 56, 102, 0.78) 0%, rgba(0, 0, 0, 0) 45.5%), url(${ladder.src}) center / cover no-repeat`,
                }}
              >
                <Image alt="" className="svg social-link" src={aeroplane} />
                <a href="#">
                  <h4>TRACK LINE</h4>
                </a>
                <p>
                  Phosfluorescently enhance 24/7 resources through distributed
                  materials. Distinctively incubate cross-media bandwidth for
                  sticky platforms.
                </p>
              </div>
            </div>
            <div className="item col-3">
              <div
                className="feature_s_item"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 56, 102, 0.78) 0%, rgba(0, 0, 0, 0) 45.5%), url(${ladder.src}) center / cover no-repeat`,
                }}
              >
                <Image alt="" className="svg social-link" src={aeroplane} />
                <a href="#">
                  <h4>ACTIV</h4>
                </a>
                <p>
                  Phosfluorescently enhance 24/7 resources through distributed
                  materials. Distinctively incubate cross-media bandwidth for
                  sticky platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
