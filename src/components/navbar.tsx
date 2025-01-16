"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${hasScrolled ? "shadow-sm" : ""}`}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          hasScrolled
            ? "backdrop-blur-md bg-white/90 border-b border-gray-200/80"
            : isMenuOpen
              ? "md:bg-transparent md:backdrop-blur-0 backdrop-blur-md bg-white/90"
              : "bg-transparent"
        }`}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="relative group">
            <div className="flex items-center gap-2">
              <Image
                src="/images/grp.jpg"
                alt="SALT Events Logo"
                width={36}
                height={36}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-lg"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium transition-colors duration-300 hover:text-[rgb(226,34,40)] text-black/60"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center gap-6">
              {[
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
                {
                  icon: FaFacebookF,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
                {
                  icon: FaTwitter,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[rgb(226,34,40)] hover:scale-110 hover:-translate-y-1 text-black/60"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div>
              <Link
                href="/contact"
                className="group relative inline-block px-6 py-2 bg-[rgb(226,34,40)] text-white 
                          rounded-full text-sm font-medium hover:bg-[rgb(206,31,36)] 
                          transition-all duration-300 border border-transparent 
                          hover:border-red-200 w-[130px] text-center whitespace-nowrap hover:scale-105"
              >
                <span className="inline-flex items-center justify-center">
                  Get in Touch
                </span>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg active:scale-95 transition-all duration-300 ${
              hasScrolled || isMenuOpen
                ? "hover:bg-black/5 text-black/80"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden relative transition-all duration-300 ${
          isMenuOpen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="absolute inset-0 transition-all duration-300 bg-white/90 backdrop-blur-md" />

        {isMenuOpen && (
          <div className="relative z-10 px-4 py-4 space-y-4">
            <nav className="flex flex-col items-center gap-4">
              <Link
                href="/about"
                className="text-sm font-medium transition-colors duration-300 text-black/60 hover:text-[rgb(226,34,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <div className="flex justify-center gap-6">
              {[
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
                {
                  icon: FaFacebookF,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
                {
                  icon: FaTwitter,
                  href: "https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ==",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[rgb(226,34,40)] hover:scale-110 hover:-translate-y-1 text-black/60"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-center">
              <div>
                <Link
                  href="/contact"
                  className="group relative inline-block px-6 py-2 bg-[rgb(226,34,40)] 
                            text-white rounded-full text-sm font-medium
                            hover:bg-[rgb(206,31,36)] transition-all duration-300
                            border border-transparent hover:border-red-200 
                            w-[130px] text-center whitespace-nowrap hover:scale-105"
                >
                  <span className="inline-flex items-center justify-center">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
