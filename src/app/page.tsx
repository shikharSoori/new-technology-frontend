"use client";

import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <Counter />
      <Testimonials />
      <WhySoori />
      <Partners />
    </>
  );
};

export default Home;
