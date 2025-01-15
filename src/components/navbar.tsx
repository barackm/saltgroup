"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCircle, FiMenu } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50"
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/60 border-b border-white/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="relative group">
            <div className="flex items-center gap-1">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 bg-[rgb(226,34,40)] rounded-lg flex items-center justify-center"
              >
                <FiCircle className="w-4 h-4 text-white" />
              </motion.div>
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
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaFacebookF, href: "https://facebook.com" },
                { icon: FaTwitter, href: "https://twitter.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-black/60 hover:text-[rgb(226,34,40)] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ boxShadow: "0 0 0 rgba(226,34,40, 0)" }}
              animate={{
                boxShadow: "0 0 15px rgba(226,34,40, 0.3)",
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="group relative px-6 py-2 bg-[rgb(226,34,40)] text-white 
                        rounded-full text-sm font-medium hover:bg-[rgb(206,31,36)] 
                        transition-all duration-300 border border-transparent 
                        hover:border-red-200 w-[130px] text-center whitespace-nowrap"
            >
              <span className="inline-flex items-center justify-center">
                Get in Touch
              </span>
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg"
          >
            <FiMenu className="w-6 h-6 text-black/80" />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        className="md:hidden relative bg-white/90 backdrop-blur-md"
      >
        {isMenuOpen && (
          <div className="px-4 py-4 space-y-4">
            <div className="flex justify-center gap-6">
              {[
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaFacebookF, href: "https://facebook.com" },
                { icon: FaTwitter, href: "https://twitter.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-black/60 hover:text-[rgb(226,34,40)] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-block px-6 py-2 bg-[rgb(226,34,40)] 
                          text-white rounded-full text-sm font-medium
                          hover:bg-[rgb(206,31,36)] transition-all duration-300
                          border border-transparent hover:border-red-200 
                          w-[130px] text-center whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center">
                  Get in Touch
                </span>
              </motion.a>
            </div>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
