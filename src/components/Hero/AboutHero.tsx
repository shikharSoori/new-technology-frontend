import { url } from "inspector";
import React from "react";
import "../../app/about/about.scss";
const AboutHero = ({ title }: any) => {
  return (
    <div className="breadcrumb-area bg-img about-us">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap">
              <nav aria-label="breadcrumb">
                <h2 className="breadcrumb-title">{title}</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
