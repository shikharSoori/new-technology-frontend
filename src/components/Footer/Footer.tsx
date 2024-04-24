import Link from "next/link";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer-widget-area gray-bg section-padding pb-125">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-4 col-md-6">
              <div className="footer-single-widget mt-40">
                <div className="widget-logo">
                  <a href="index.html">
                    <Image src={logo} height={100} width={200} alt="logo" />
                  </a>
                </div>
                <div className="widget-body">
                  <p className="desc">
                    Ideas es to obtain pain of because the because
                    occasionallyght ocean he and chunks as necessary
                  </p>
                  <ul className="contact-info">
                    <li>
                      <span>Address: </span> 56 Sheltek Tower, Cental Mall New
                      Yourk City, USA
                    </li>
                    <li>
                      <span>Phone:</span> 02156 987 456 <br />
                      35621 895 456
                    </li>
                    <li>
                      <span>Web:</span> info@example.com <br />
                      www.example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-single-widget mt-40">
                <h3 className="widget-title">Our Link</h3>
                <div className="widget-body">
                  <ul className="useful-link">
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Blog Post
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Pages
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-single-widget mt-40">
                <h3 className="widget-title">Newsletter</h3>
                <div className="widget-body news-subtitle">
                  <p className="desc">
                    Subscribe our Newsletter because occasionallyght ocean he
                    and he can make some of noise to us
                  </p>
                  <p>
                    <b>
                      To get all latest update and news Subscribe our newsletter
                      now!
                    </b>
                  </p>
                  <div className="newsletter-inner">
                    <form id="mc-form">
                      {/* <input type="email" className="news-field" id="mc-email" autocomplete="off" placeholder="Enter your email here"> */}
                      <button className="btn btn-all" id="mc-submit">
                        Subscribe
                      </button>
                    </form>
                    <div className="mailchimp-alerts">
                      <div className="mailchimp-submitting"></div>
                      <div className="mailchimp-success"></div>
                      <div className="mailchimp-error"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-text text-center">
            <p>
              &copy; 2021 <b>Soori Technology</b> Developed By{" "}
              <i className="fa fa-heart text-danger"></i> by{" "}
              <a href="https://hasthemes.com/">
                <b>
                  Soori Solutions
                </b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
