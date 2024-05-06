import React from "react";
import { getData } from "../lib/getData";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/Hero/AboutHero";

const Blogs = async () => {
  const data = await getData("blog-app/blog?limit=0&offset=0");
  // const data = await getData("product-app/product?limit=0&offset=0");

  const blogs = data.results;
  const formatBlogName = (name: any) => {
    return name
      .replace(/\s/g, "_") // Replace all spaces with underscores
      .replace(/\//g, "-"); // Replace all slashes with dashes
  };
  return (
    <>
      <AboutHero title="Blogs" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            {blogs?.map((blog: any) => {
              return (
                <div key={blog.id} className="col-lg-4 col-md-6">
                  <div className="blog-item mt-40">
                    <div className="blog-thumb">
                      <Link href={`/blog/${formatBlogName(blog.name)}`}>
                        <Image
                          height={250}
                          src={blog.image}
                          alt={"hello"}
                          width={370}
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <a href="blog-details.html">{blog.name}</a>
                      </h3>
                      <p>{blog.description}</p>
                      <div className="blog-meta">
                        <a href="#">{blog.createdDateBs}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
