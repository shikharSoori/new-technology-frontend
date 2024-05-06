"use client";
import Link from "next/link";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FormEvent, useRef, useState } from "react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-app/contact`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <footer>
      <div className="footer-widget-area gray-bg section-padding pb-125">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-4 col-md-6">
              <div className="footer-single-widget mt-40">
                <div className="widget-logo">
                  <Link href="/">
                    <Image src={logo} height={100} width={200} alt="logo" />
                  </Link>
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
                      <Link
                        href="/"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="products/wacom"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Wacom
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/products"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/logitech"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Logitech
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="products/zebra"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Zebra
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/hid"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        HID
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/blog"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <MdKeyboardDoubleArrowRight />
                        Contact Us
                      </Link>
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
                    <form id="mc-form" onSubmit={onSubmit} ref={formRef}>
                      <input
                        type="email"
                        className="news-field"
                        id="mc-email"
                        placeholder="Enter your email here"
                      />
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
              <Link href="https://hasthemes.com/">
                <b>Soori Solutions</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
