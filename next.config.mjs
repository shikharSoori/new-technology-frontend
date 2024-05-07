import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")], // Correct path for SASS/SCSS
  },
  images: {
    domains: ["api-website.sooritechnology.com.np", "192.168.1.73"],
  },
  generateBuildId: async () => {
    return process.env.NEXT_PUBLIC_API;
  },
};

export default nextConfig;
