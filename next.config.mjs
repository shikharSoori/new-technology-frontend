import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")], // Correct path for SASS/SCSS
  },
};

export default nextConfig;
