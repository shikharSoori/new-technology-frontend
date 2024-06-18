import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";
import Scroller from "@/components/Scroller/Scroller";
import TrackTraceVideo from "@/components/TrackTraceVideo/TrackTraceVideo";
import Image from "next/image";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import TitleText from "@/components/Testimonials/TitleText";
import bg from "../assets/innovationBg-removebg.png";
import Link from "next/link";
import MotoBanner from "@/components/MotoBanner/MotoBanner";
export const revalidate = 3600;
const Home = () => {
  return (
    <>
      <HomeHero />
      <MotoBanner />
      {/* <section className="policy-area pb-125 pt-125">
        <div className="container">
          <div className="row mtn-30">
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon1} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Creative Ideas</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon2} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Low Cost</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon3} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Talented Team</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon4} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Online Support</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <TrackTraceVideo />
      <HomeServices />
      <WhySoori />
      <Counter />
      <Testimonials />
      <section
        className="blog-area section-padding pb-0 fix wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="h1 title">Latest Post from Blog</h2>
                <p>
                  labore dolore magnam aliquam quaerat voluptatem ad minima
                  veniam, quis nostrum exercitationem
                </p>
              </div>
            </div>
          </div>
          <div className="row mtn-30">
            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <Link href="blog-details.html">
                    <img src="assets/img/blog/blog-1.jpg" alt="blog thumb" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link href="blog-details.html">Beneficial strategies</Link>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <Link href="#">25 October, 2019</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <Link href="blog-details.html">
                    <img src="assets/img/blog/blog-2.jpg" alt="blog thumb" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link href="blog-details.html">Themoment necsary</Link>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <Link href="#">25 October, 2019</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-item mt-30">
                <div className="blog-thumb">
                  <Link href="blog-details.html">
                    <img src="assets/img/blog/blog-3.jpg" alt="blog thumb" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link href="blog-details.html">Because occasional</Link>
                  </h3>
                  <p>
                    Ideas es to obtain pain of itself, because it is pain, but
                    because occasionallyght ocean he Internet tend to a chunks
                    as necessary with some of themoment
                  </p>
                  <div className="blog-meta">
                    <Link href="#">25 October, 2019</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />

      <Scroller />
    </>
  );
};

export default Home;
