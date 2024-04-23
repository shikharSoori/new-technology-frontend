import Link from "next/link";

import Image from "next/image";


const Footer = () => {
  return (
    <footer>
      {/* prefooter */}
      <div>
        <p>STAY IN THE LOOP WITH US</p>
        <p>AUTOMATE, INNOVATE & ELEVATE</p>
        <p>
          Unlock a world of exclusive benefits by joining our LinkedIn page.
          Stay ahead of the curve with early access to our latest products,
          special promotions, and exciting updates. Connect with a community of
          like-minded individuals who share a passion for Soori Solutions by
          following to our LinkedIn at
        </p>
        <Link href={"https://www.linkedin.com/company/soori-solutions-pvt-ltd"}>
          https://www.linkedin.com/company/soori-solutions-pvt-ltd.
        </Link>
      </div>

      <Link href="/" className="text-3xl font-bold">

      </Link>

      <div>
        <p>Company</p>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </div>

      {/* footer */}

      <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
    </footer>
  );
};
export default Footer;
