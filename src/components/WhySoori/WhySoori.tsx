import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";
import { fetchWhySoori, getData } from "@/app/lib/getData";
import Link from "next/link";
import TitleText from "../Testimonials/TitleText";

const WhySoori = async () => {
  const data = await getData(`product-app/why-soori`);
  const whyReason = data?.results;
  // const data = await getData(
  //   `product-app/product?ordering=-id&brand_id=${matchedBrand.id}&offset=0&limit=0`
  // );
  return (
    <section
      className="blog-area section-padding--ptb_90 fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="h1 title w-100 mw-100">
                <TitleText
                  title={`Why<br/> <span>Soori</span> Technology <span>?</span>`}
                />
                {/* <span>Why</span> <br /> Soori Technology */}
              </h2>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                labore dolore magnam aliquam quaerat voluptatem ad minima
                veniam, quis nostrum exercitationem
              </p>
            </div>
          </div>
        </div>
        <div className="row mtn-30">
          {whyReason?.map((why: any, id: number) => {
            return (
              <React.Fragment key={why.id}>
                <div
                  className="col-md-4"
                  data-aos="fade-right"
                  data-aos-delay={`${id * 100}`}
                  data-aos-easing="ease-in-sine"
                >
                  <div className="blog-item mt-30">
                    <div className="blog-thumb">
                      <Link href={"#"}>
                        <Image
                          src={why.image}
                          alt="policy banner"
                          height={250} // Adjust as needed
                          width={370} // Adjust as needed
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <Link href={"#"}>{why.title}</Link>
                      </h3>
                      <p>{why.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySoori;
