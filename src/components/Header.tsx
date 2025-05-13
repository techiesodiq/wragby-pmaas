"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../assets/icons/arrow_right.svg";
import Logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#BCCCE2] shadow-md">
      <div className="container mx-auto px-4 md:py-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image src={Logo} alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" color="white">
              About Us
            </NavLink>
            <NavLink href="/">Our Products</NavLink>
            <NavLink href="/" color="red">
              Our Services
            </NavLink>
            <NavLink href="/">Resources</NavLink>
            <NavLink href="/">Careers</NavLink>
          </div>

          <div className="hidden md:flex bg-[#002060] rounded-[10px] px-[20px] py-[10px]">
            <NavLink href="/" color="white">
              <div className="flex flex-row items-center gap-4 text-[20px]">
                Contact Us <Image src={ArrowRight} alt="Arrow right" />
              </div>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/">About Us</MobileNavLink>
          <MobileNavLink href="/">Our Products</MobileNavLink>
          <MobileNavLink href="/">Our Services</MobileNavLink>
          <MobileNavLink href="/">Resources</MobileNavLink>
          <MobileNavLink href="/">Careers</MobileNavLink>
          <MobileNavLink href="/">Contact Us</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Component for desktop navigation links
function NavLink({
  href,
  color = "gray-700",
  children,
}: {
  href: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-${color} hover:text-gray-900 px-3 py-2 text-[16px] font-medium`}
    >
      {children}
    </Link>
  );
}

// Component for mobile navigation links
function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );
}
