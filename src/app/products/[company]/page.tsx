// export default function Page({ params }: { params: { slug: string } }) {}

import { getData } from "@/app/lib/getData";
import Brands from "@/components/Brands/Brands";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";

interface props {
  params: {
    company: string;
  };
}
export async function generateStaticParams() {
  const data = await getData("product-app/brand");
  const brandData = data.results;
  const params = brandData.map((brand: any) => ({
    company: brand.brand.toLowerCase(), // Assuming 'name' is the property you want to use as 'company'
  }));
  return params;
}
const Page = async ({ params }: props) => {
  const brandData = await getData("product-app/brand");
  const brands = brandData.results;
  const brandName = params.company;
  const matchedBrand = brands.find(
    (brand: any) => brand.brand.toLowerCase() === brandName
  );
  const data = await getData(
    `product-app/product?ordering=-id&brand_id=${matchedBrand.id}&offset=0&limit=0`
  );
  const brandProducts = data.results;

  return (
    <>
      {/* My Post: {params?.company} */}
      <AboutHero title="products" subTitle={params?.company} />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
              <Brands />
            </div>
            <div className="col-lg-9 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {brandProducts?.map((product: any) => {
                  return (
                    <div key={product?.id} className="col-md-6">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link
                            href={`/products/${params.company}/${formatName(
                              product.productName
                            )}`}
                          >
                            {/* <img
                         src="assets/img/blog/blog-1.jpg"
                         alt="blog thumb"
                       /> */}
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
                              href={`/products/${params.company}/${formatName(
                                product.productName
                              )}`}
                            >
                              {product.productName}
                            </Link>
                          </h3>
                          <p>
                            Ideas es to obtain pain of itself, because it is
                            pain, but because occasionallyght ocean he Internet
                            tend to a chunks as necessary with some of themoment
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
export default Page;
