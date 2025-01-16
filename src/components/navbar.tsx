"use client";
import Link from "next/link";
import { FiCircle, FiMenu } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="absolute inset-0 backdrop-blur-md bg-white/60 border-b border-white/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="relative group">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 bg-[rgb(226,34,40)] rounded-lg flex items-center justify-center transition-transform hover:rotate-90 duration-300">
                <FiCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-semibold tracking-wide">
                  <span className="text-[rgb(226,34,40)]">SALT</span>
                  <span className="text-black/80">EVENTS</span>
                </span>
                <span className="text-[10px] font-medium text-black/40 uppercase tracking-widest">
                  studio
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
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
                  className="text-black/60 hover:text-[rgb(226,34,40)] transition-all hover:scale-110 hover:-translate-y-1"
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
            className="md:hidden p-2 hover:bg-black/5 rounded-lg active:scale-95 transition-transform"
          >
            <FiMenu className="w-6 h-6 text-black/80" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden relative bg-white/90 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {isMenuOpen && (
          <div className="px-4 py-4 space-y-4">
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
                  className="text-black/60 hover:text-[rgb(226,34,40)] transition-all hover:scale-110 hover:-translate-y-1"
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
