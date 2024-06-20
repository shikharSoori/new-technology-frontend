"use client";
import { fetchData, getData } from "@/app/lib/getData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const productCount = async (brandId: string) => {
  const data = await getData(
    `product-app/product?ordering=-id&brand_id=${brandId}`
  );
  return data?.count || 0;
};

interface Brand {
  id: string;
  brand: string;
}

const Brands = () => {
  const [brandData, setBrandData] = useState<Brand[]>([]);
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    {}
  );

  const pathName = usePathname();

  useEffect(() => {
    (async () => {
      const data = await fetchData("product-app/brand?limit=0");
      if (data && data.results) {
        setBrandData(data.results);

        const counts: { [key: string]: number } = {};
        await Promise.all(
          data.results.map(async (brand: Brand) => {
            const count = await productCount(brand.id);
            counts[brand.id] = count;
          })
        );
        setProductCounts(counts);
      }
    })();
  }, []);

  return (
    <div className="blog-widget mt-40">
      <h4 className="blog-widget-title">Brands</h4>
      <ul className="blog-categories">
        {brandData.map((brand) => (
          <li key={brand.id}>
            <Link
              href={`/products/${brand.brand.toLowerCase()}`}
              className={
                pathName === `/products/${brand.brand.toLowerCase()}`
                  ? "active"
                  : ""
              }
            >
              {brand.brand}
            </Link>
            <span>({productCounts[brand.id] || 0})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
