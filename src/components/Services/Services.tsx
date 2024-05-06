"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SingleServices = ({ index, image, name, description }: any) => {
  const [expandedCardIndices, setExpandedCardIndices] = useState<number[]>([]);
  const toggleDescription = (index: any) => {
    if (expandedCardIndices.includes(index)) {
      setExpandedCardIndices(expandedCardIndices.filter((i) => i !== index));
    } else {
      setExpandedCardIndices([...expandedCardIndices, index]);
    }
  };
  const formatProductName = (name: any) => {
    return name
      .replace(/\s/g, "_") // Replace all spaces with underscores
      .replace(/\//g, "-"); // Replace all slashes with dashes
  };
  return (
    <>
      <div className="service-policy-item mt-10">
        <div className="service-policy-icon">
          <Image src={image} alt="icon" width={50} height={50} />
        </div>
        <h3 className="service-policy-title">{name}</h3>
        <p className="service-policy-desc">
          {expandedCardIndices.includes(index)
            ? description
            : `${description.slice(0, 147)}`}
          .... &nbsp;
          <Link
            className={"know-more"}
            href={`/services/${formatProductName(name)}`}
          >
            Know More
          </Link>
        </p>
      </div>
    </>
  );
};

export default SingleServices;
