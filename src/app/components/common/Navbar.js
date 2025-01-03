'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-yellow-400 tracking-widest">
          <Link href="/">FITNESS CLUB</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
          </div>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 bg-black/80 md:bg-transparent w-full md:w-auto absolute md:relative top-16 left-0 md:top-0 md:left-0 md:z-auto text-white`}
        >
             <Link href="/" className="block py-2 px-4 hover:text-yellow-500 ">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 hover:text-yellow-500">
            About us
          </Link>
          <Link href="/gallery" className="block py-2 px-4 hover:text-yellow-500">
            Gallery
          </Link>
          <Link href="/blog" className="block py-2 px-4 hover:text-yellow-500 ">
            Blog
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:text-yellow-500">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
