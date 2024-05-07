import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")], // Correct path for SASS/SCSS
  },
  images: {
    domains: ["api-website.sooritechnology.com.np", "192.168.1.73"],
  },
};

export default nextConfig;
