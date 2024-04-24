import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Soori Technology",
  description:
    "Soori Technology is a software development company based in Kathmandu,Nepal. ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
