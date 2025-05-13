import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo2.svg";

function Footer() {
  const products = ["Ibroka", "Wbiz", "Cools", "SME in a Box", "Worldwide"];
  const industries = [
    "Financial Services",
    "Fashion & Beauty",
    "Agriculture",
    "Manufacturing",
  ];
  const links = ["About", "Security", "Blog", "Careers"];

  return (
    <footer className="bg-[#F4F4FE] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image src={Logo} alt="" />
              </Link>
            </div>
            <p className="mb-4 text-[#2458A3]">
              Be the first to receive all the recent updates, articles, and
              valuable materials.
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-blue-500 font-medium mb-2"
              >
                Email address
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  placeholder="Your email"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[#000044] font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-[#4D608A]">
              {links.map((product, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#000044] font-medium mb-4">Wragby Products</h4>
            <ul className="space-y-2 text-[#4D608A]">
              {products.map((product, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#000044] font-medium mb-4">
              Industry Solutions
            </h4>
            <ul className="space-y-2 text-[#4D608A]">
              {industries.map((industry, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 text-[#667185]">
            <a href="#" className="hover:text-blue-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500">
              Security
            </a>
            <a href="#" className="hover:text-blue-500">
              Sitemap
            </a>
          </div>
          <div className="text-sm text-[#98A2B3]">
            © 2025 Wragby. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
