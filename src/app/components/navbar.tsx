"use client"; 

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = (menu: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(menu);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav className="bg-white fixed w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images.png" alt="Logo" width={60} height={50} className="cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-14">
            <Link href="/" className="hover:text-gray-600">Home</Link>

            {/* About Us Dropdown */}
            <div className="relative" onMouseEnter={() => openDropdown("about")} onMouseLeave={closeDropdown}>
              <Link href="/about" className="hover:text-gray-600">About Us</Link>
              {activeDropdown === "about" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg px-1 pt-1"
                     onMouseEnter={() => openDropdown("about")}
                     onMouseLeave={closeDropdown}
                >
                  <Link href="/belief" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">Our Belief</Link>
                  <Link href="/history" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">Our History</Link>
                  <Link href="/worship" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">Our Worship</Link>
                  <Link href="/minister" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">Our Minister</Link>
                </div>
              )}
            </div>

            <Link href="/lessons" className="hover:text-gray-600">Sermons</Link>
            <Link href="/getintouch" className="hover:text-gray-600">Get in Touch</Link>

            {/* More Dropdown */}
            <div className="relative" onMouseEnter={() => openDropdown("more")} onMouseLeave={closeDropdown}>
              <button className="hover:text-gray-600">More</button>
              {activeDropdown === "more" && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg px-1 pt-1"
                     onMouseEnter={() => openDropdown("more")}
                     onMouseLeave={closeDropdown}
                >
                  <Link href="/gallery" className="block px-6 py-3 hover:bg-gray-100 hover:rounded-2xl">Gallery</Link>
                  <Link href="/ministry" className="block px-6 py-3 hover:bg-gray-100 hover:rounded-2xl">Our Ministry</Link>
                  <Link href="/support" className="block px-6 py-3 hover:bg-gray-100 hover:rounded-2xl">Support</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 focus:outline-none">
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>

          {/* About Us Mobile Dropdown */}
          <button onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            About Us
          </button>
          {activeDropdown === "about" && (
            <div className="bg-gray-100">
              <Link href="/belief" className="block px-6 py-2 hover:bg-gray-200">Our Belief</Link>
              <Link href="/history" className="block px-6 py-2 hover:bg-gray-200">Our History</Link>
              <Link href="/worship" className="block px-6 py-2 hover:bg-gray-200">Our Worship</Link>
              <Link href="/minister" className="block px-6 py-2 hover:bg-gray-200">Our Minister</Link>
            </div>
          )}

          <Link href="/sermons" className="block px-4 py-2 hover:bg-gray-100">Sermons</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Get in Touch</Link>

          {/* More Mobile Dropdown */}
          <button onClick={() => setActiveDropdown(activeDropdown === "more" ? null : "more")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            More
          </button>
          {activeDropdown === "more" && (
            <div className="bg-gray-100">
              <Link href="/events" className="block px-6 py-3 hover:bg-gray-200">Events</Link>
              <Link href="/ministries" className="block px-6 py-3 hover:bg-gray-200">Ministries</Link>
              <Link href="/donate" className="block px-6 py-3 hover:bg-gray-200">Donate</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
