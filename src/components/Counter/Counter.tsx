import React from "react";
import CountUp from "react-countup";

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
const Counter = () => {
  return (
    <section
      className="funfacts-section section-padding--ptb_90 fix wow fadeInUp"
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
              <Count
                className="odometer h1"
                duration={10}
                number={100}
                title="+"
              />{" "}
              <h5>Completed Projects</h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item mt-40">
              <Count
                className="odometer h1"
                duration={10}
                number={100}
                title="+"
              />{" "}
              <h5>Cup Coffee</h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item mt-40">
              <Count
                className="odometer h1"
                duration={10}
                number={100}
                title="+"
              />{" "}
              <h5>Awards Winning</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;