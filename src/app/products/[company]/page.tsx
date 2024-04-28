// export default function Page({ params }: { params: { slug: string } }) {}

import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";

interface props {
  params: {
    company: string;
  };
}
const Page = ({ params }: props) => {
  return (
    <>
      {/* My Post: {params?.company} */}
      <AboutHero title="products" subTitle={params?.company} />
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

              <div className="blog-widget mt-40">
                <h4 className="blog-widget-title">Brands</h4>
                <ul className="blog-categories">
                  <li>
                    <Link href="/products/zebra">Zebra</Link>

                    <span>(20)</span>
                  </li>
                  <li>
                    <Link href="/products/logitech">Logitech</Link>{" "}
                    <span>(18)</span>
                  </li>
                  <li>
                    <Link href="/company">Mocquito Control</Link>
                    <span>(40)</span>
                  </li>
                </ul>
              </div>

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
                <div className="col-md-6">
                  <div className="blog-item mt-40">
                    <div className="blog-thumb">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-1.jpg"
                          alt="blog thumb"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">
                        <Link href="/products/zebra/benificaialproduct">
                          Beneficial strategies
                        </Link>
                      </h3>
                      <p>
                        Ideas es to obtain pain of itself, because it is pain,
                        but because occasionallyght ocean he Internet tend to a
                        chunks as necessary with some of themoment
                      </p>
                    </div>
                  </div>
                </div>

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
export default Page;
