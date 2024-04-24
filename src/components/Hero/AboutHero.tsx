import { url } from "inspector";
import React from "react";

const AboutHero = () => {
  return (
    <div
      className="breadcrumb-area bg-img about-us"

    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap">
              <nav aria-label="breadcrumb">
                <h2 className="breadcrumb-title">About Us</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    about us
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
