import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
// import "./(home)/globals.css";
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
        <div className="m-auto flex min-h-screen max-w-[100vw] flex-col justify-between">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
