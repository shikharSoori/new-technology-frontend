import { getData } from "@/app/lib/getData";
import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
import React from "react";

interface props {
  params: {
    blogDetail: string;
  };
}
const BlogDetail = async ({ params }: props) => {
  const reFormatProductName = (name: any) => {
    return name
      .replace(/\_/g, " ") // Replace all spaces with underscores
      .replace(/\-/g, "/"); // Replace all slashes with dashes
  };
  const blogData = await getData("blog-app/blog?limit=0&offset=0");
  const blogs = blogData.results;
  const blogName = reFormatProductName(params.blogDetail);

  const matchedBrand = blogs.find((blog: any) => blog.name === blogName);

  return (
    <>
      <AboutHero
        title="blogs"
        subTitle={reFormatProductName(params?.blogDetail)}
      />{" "}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  <a>
                    <Image
                      src={matchedBrand.image}
                      width={870}
                      // fill={true}
                      // layout="responsive"
                      height={500}
                      alt="blog-img"
                      // objectFit="contain"
                      // object-fit: "cover"
                    />
                  </a>
                </div>
                <div className="blog-content blog-details">
                  <h3 className="blog-title">{matchedBrand.name}</h3>
                  <div className="blog-meta">
                    <a href="#">{blogData.createdDateBs}</a>
                  </div>
                  <p> {matchedBrand.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
