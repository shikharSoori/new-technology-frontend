"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../app/globals.css";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import "./header.scss";
import { MdCompress } from "react-icons/md";

const Header = () => {
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsSticky(scroll >= 300);
  };

  // Add the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Off-Canvas Open/Close
  const openOffCanvas = () => {
    setIsOffCanvasOpen(true);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  return (
    <>
      <header className={`header-area ${isSticky ? "is-sticky" : ""}`}>
        {/* Main Header */}
        <div className="main-header d-none d-lg-block">
          {/* Header Top Section */}
          <div className="header-top theme-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-sm-4">
                  <div className="header-top-left text-left text-sm-left">
                    Call us:<a href="tel:+968573979894"> 01254 789 321</a>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="header-settings-bar d-flex justify-content-end">
                    <div className="header-social-link">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                    <div className="language pl-30">
                      <i className="fa fa-angle-down"></i>
                      <ul className="dropdown-list">
                        {/* Additional languages could be added here */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Menu Section */}
          <div
            className={`main-menu-wrapper sticky ${
              pathName === "/" ? "header-transparent" : ""
            } ${isSticky ? "is-sticky" : ""}`}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="brand-logo">
                    <Link href="/">
                      <Image
                        src={Logo}
                        height={40}
                        width={140}
                        alt="logo"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="main-menu-inner">
                    <nav className="main-menu">
                      <ul>
                        {/* Example Menu Items */}
                        <li
                          className={`link ${pathName === "/" ? "active" : ""}`}
                        >
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/about" ? "active" : ""
                          }`}
                        >
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/service">Products</Link>
                          <ul className="dropdown">
                            <li>
                              <Link href="/service">Wacom</Link>
                            </li>
                            <li>
                              <Link href="/service-details">HID</Link>
                            </li>
                            <li>
                              <Link href="/service-details">Logitech</Link>
                            </li>
                            <li>
                              <Link href="/service-details">Zebra</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/team" ? "active" : ""
                          }`}
                        >
                          <Link href="/team">Team</Link>
                        </li>
                        <li
                          className={`link ${
                            pathName === "/contact" ? "active" : ""
                          }`}
                        >
                          <Link href="/contact">Contact</Link>
                        </li>
                        {/* Add more menu items as needed */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div
          className={`mobile-header d-lg-none d-md-block ${
            isSticky ? "is-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mobile-main-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image
                        src={Logo}
                        height={40}
                        width={140}
                        alt="logo"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="mobile-menu-toggler">
                    <button className="mobile-menu-btn" onClick={openOffCanvas}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Off-Cavas Menu */}
        <aside
          className={`off-canvas-wrapper ${isOffCanvasOpen ? "open" : ""}`}
        >
          <div className="off-canvas-overlay" onClick={closeOffCanvas}></div>
          <div className="off-canvas-inner-content">
            <div className="btn-close-off-canvas" onClick={closeOffCanvas}>
              <MdCompress />
            </div>

            <div className="off-canvas-inner">
              {/* <div className="search-box-offcanvas">
                <form>
                  <input type="text" placeholder="Search Here..." />
                  <button className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}

              <div className="mobile-navigation">
                <nav>
                  <ul className="mobile-menu">
                    {/* Example Menu Items */}
                    <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/">Home version 01</Link>
                        </li>
                        <li>
                          <Link href="/index-2">Home version 02</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/service">Services</Link>
                      {/* Add more menu items as needed */}
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/team">Team</Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team Style 02</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
