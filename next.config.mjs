import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")], // Correct path for SASS/SCSS
  },
  images: {
    domains: ["api-website.sooritechnology.com.np"], // Add your allowed domains here
  },
};

export default nextConfig;
