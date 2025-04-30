function Footer() {
  const products = ["Ibroka", "Wbiz", "Cools", "SME in a Box", "Worldwide"];
  const industries = [
    "Financial Services",
    "Fashion & Beauty",
    "Agriculture",
    "Manufacturing",
  ];
  const links = ["Company", "About", "Security", "Blog", "Careers"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Wragby®</h3>
            <p className="mb-4">
              Be the first to receive all the recent updates, articles, and
              valuable materials.
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
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
            <h4 className="text-white font-medium mb-4">Wragby Products</h4>
            <ul className="space-y-2">
              {products.map((product, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Industry Solutions</h4>
            <ul className="space-y-2">
              {industries.map((industry, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
          <div className="text-sm">© 2023 Wragby. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
