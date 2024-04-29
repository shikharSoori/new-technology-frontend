"use client";

import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Home =  () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const data = await getData("product-app/brand");
  // console.log(data?.results);
  return (
    <>
      <HomeHero />
      <HomeServices />
      <Counter />
      <Testimonials />
      <WhySoori />
      <Partners />
      <div
        className={`scroll-top d-flex justify-content-center align-items-center  ${
          isVisible ? "" : "not-visible"
        }`}
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp size={36} color="white" />
      </div>
    </>
  );
};

export default Home;
