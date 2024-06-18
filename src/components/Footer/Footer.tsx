// "use client";
import Link from "next/link";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { getData } from "@/app/lib/getData";
import Slider from "@/components/Carousel/Carousel";
import BlogCard from "../Blog/BlogCard";
import { formatName } from "@/utils/FormatName";
import React from "react";

const Footer = async () => {
  const data = await getData(`blog-app/blog?limit=3`);
  const blogs = data?.results;

  var brandSlider = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 500,
  };
  const maxLength = 100;

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
                <h3 className="widget-title">Blogs</h3>
                {/* <div className="widget-body news-subtitle">
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
                </div> */}
                {/* <div className="blog-item mt-40">
                  <div className="blog-thumb">
                    <Link href={`/blog/${formatName(blogName)}`}>
                      <Image
                        height={250}
                        src={blogImage}
                        alt={"hello"}
                        width={370}
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link href={`/blog/${formatName(blogName)}`}>
                        {blogName}
                      </Link>
                    </h3>

                    {description.length >= maxLength
                      ? `${description.substr(0, maxLength).trim()}...`
                      : description}

                    <div className="blog-meta">
                      <Link href="#">{createdDate}</Link>
                    </div>
                  </div>
                </div> */}
                <Slider {...brandSlider}>
                  {blogs?.map((blogitem: any) => {
                    return (
                      <React.Fragment key={blogitem.id}>
                        <div className="blog-item ">
                          <div className="blog-thumb">
                            <Link href={`/blog/${formatName(blogitem.name)}`}>
                              <Image
                                height={250}
                                src={blogitem.image}
                                alt={"hello"}
                                width={370}
                              />
                            </Link>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </Slider>
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
              <Link href="/">
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
