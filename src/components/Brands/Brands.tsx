"use client";
import { getData } from "@/app/lib/getData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Brands = async () => {
  // const pathName = usePathname();
  const data = await getData("product-app/brand");
  console.log(data, "dd");

  return (
    <div className="blog-widget mt-40">
      <h4 className="blog-widget-title">Brands</h4>
      <ul className="blog-categories">
        <li>
          <Link
            href="/products/zebra"
            // className={` ${pathName === "/products/zebra" ? "active" : ""}`}
          >
            Zebra
          </Link>
          <span>(20)</span>
        </li>
        <li>
          <Link href="/products/logitech">Logitech</Link> <span>(18)</span>
        </li>
        <li>
          <Link href="/company">Mocquito Control</Link>
          <span>(40)</span>
        </li>
      </ul>
    </div>
  );
};

export default Brands;
