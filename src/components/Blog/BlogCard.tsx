"use client";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogCard = ({
  description,
  createdDate,
  blogName,
  blogImage,
  index,
}: any) => {

  const maxLength = 100;
  

  return (
    <>
      <div className="blog-item mt-40">
        <div className="blog-thumb">
          <Link href={`/blog/${formatName(blogName)}`}>
            <Image height={250} src={blogImage} alt={"hello"} width={370} />
          </Link>
        </div>
        <div className="blog-content">
          <h3 className="blog-title">
            <Link href={`/blog/${formatName(blogName)}`}>{blogName}</Link>
          </h3>

          {description.length >= maxLength
            ? `${description.substr(0, maxLength).trim()}...`
            : description}

          <div className="blog-meta">
            <a href="#">{createdDate}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
