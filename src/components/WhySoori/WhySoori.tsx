import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";
import { fetchWhySoori, getData } from "@/app/lib/getData";

const WhySoori = async () => {
  const data = await getData(`product-app/why-soori`);
  const whyReason = data.results;
  // const data = await getData(
  //   `product-app/product?ordering=-id&brand_id=${matchedBrand.id}&offset=0&limit=0`
  // );
  return (
    <section
      className="blog-area section-padding pb-0 fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="h1 title w-100 mw-100">
                <span>Why</span> <br /> Soori Technology
              </h2>
              <p>
                labore dolore magnam aliquam quaerat voluptatem ad minima
                veniam, quis nostrum exercitationem
              </p>
            </div>
          </div>
        </div>
        <div className="row mtn-30">
          {whyReason?.map((why: any) => {
            return (
              <React.Fragment key={why.id}>
                <div className="col-md-4">
                  <div className="blog-item mt-30">
                    <div className="blog-thumb">
                      <a>
                        <Image
                          src={why.image}
                          alt="policy banner"
                          height={250} // Adjust as needed
                          width={370} // Adjust as needed
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <a>{why.title}</a>
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
