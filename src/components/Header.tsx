import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Wragby
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-600 hover:text-gray-900"
          >
            How it Works
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
