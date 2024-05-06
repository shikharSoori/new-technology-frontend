import Brands from "@/components/Brands/Brands";
import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/getData";
import Image from "next/image";

const Products = async () => {
  const data = await getData("product-app/product?limit=0&offset=0");
  const products = data?.results;
  const brandData = await getData("product-app/brand");
  const brands = brandData.results;
  const formatProductName = (name: any) => {
    return name
      .replace(/\s/g, "_") // Replace all spaces with underscores
      .replace(/\//g, "-"); // Replace all slashes with dashes
  };
  return (
    <>
      <AboutHero title="Products" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              {/* <div className="blog-widget mt-40">
                <h4 className="blog-widget-title">Search</h4>
                <form className="widget-search-form">
                  <input
                    placeholder="Search keyword"
                    type="text"
                    className="search-field"
                  />
                  <button type="submit" className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}

              <Brands />

              {/* <div className="blog-widget mt-40">
                <h4 className="blog-widget-title">Tags</h4>
                <div className="blog-tag">
                  <a href="blog-details.html">Insect</a>
                  <a href="blog-details.html">Control</a>
                  <a href="blog-details.html">Bugs</a>
                  <a href="blog-details.html">Prevention</a>
                  <a href="blog-details.html">Support</a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {products?.map((product: any) => {
                  const brandId = product.brand;
                  const matchedBrand = brands.find(
                    (brand: any) => brand.id === brandId
                  );

                  return (
                    <div key={product?.id} className="col-md-6">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link
                            href={`/products/${matchedBrand.brand.toLowerCase()}/${formatProductName(
                              product.productName
                            )}`}
                          >
                            <Image
                              src={product.image}
                              width={370}
                              height={250}
                              alt="blog-img"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <h3 className="blog-title">
                            <Link
                              href={`/products/${matchedBrand.brand.toLowerCase()}/${formatProductName(
                                product.productName
                              )}`}
                            >
                              {product.productName}
                            </Link>
                          </h3>
                          <p>
                            Ideas es to obtain pain of itself, because it is
                            pain, but because occasionally ocean the Internet
                            tend to be chunks as necessary with some of
                            themoment.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="col-12">
                  <div className="paginatoin-area text-center mt-40">
                    <ul className="pagination-box">
                      <li>
                        <a className="previous" href="#">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a className="next" href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
