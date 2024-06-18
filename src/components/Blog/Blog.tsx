import Link from "next/link";
import React from "react";
import TitleText from "../Testimonials/TitleText";
import { getData } from "@/app/lib/getData";
import Image from "next/image";
import "./blog.css";
const Blog = async () => {
  const data = await getData("blog-app/blog?limit=0&offset=0");
  const blogs = data?.results;
  console.log(blogs);
  return (
    <section
      className="blog-area section-padding--ptb_90  fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="h1 title">
                <TitleText
                  title={`<span>Latest</span> Post  from <span>Blog</span> `}
                />
                {/* Latest Post from Blog */}
              </h2>
              <p>
                labore dolore magnam aliquam quaerat voluptatem ad minima
                veniam, quis nostrum exercitationem
              </p>
            </div>
          </div>
        </div>
        <div className="row mtn-30">
          <div className="col-md-7">
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
                  because occasionallyght ocean he Internet tend to a chunks as
                  necessary with some of themoment
                </p>
                <div className="blog-meta">
                  <Link href="#">25 October, 2019</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 row">
            {blogs?.length > 0 ? (
              blogs.map((blogitem: any) => (
                <div key={blogitem.id} className="col-6">
                  <div className="home-blog-item mt-30">
                    <div className="home-blog-thumb">
                      <Link href="blog-details.html">
                        <Image
                        className="home-blog-thumb-img"
                          height={200}
                          width={200}
                          src={blogitem.image}
                          alt="blog thumb"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <p className="blog-title">
                        <Link href="blog-details.html">{blogitem.name}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs found</p>
            )}
            {blogs?.length > 0 ? (
              blogs.map((blogitem: any) => (
                <div key={blogitem.id} className="col-6">
                  <div className="home-blog-item mt-30">
                    <div className="home-blog-thumb">
                      <Link href="blog-details.html">
                        <Image
                        className="home-blog-thumb-img"
                          height={200}
                          width={200}
                          src={blogitem.image}
                          alt="blog thumb"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <p className="blog-title">
                        <Link href="blog-details.html">{blogitem.name}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
