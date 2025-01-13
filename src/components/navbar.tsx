"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCircle } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50"
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/60 border-b border-white/20" />
      <div className="relative max-w-7xl mx-auto px-8">
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

          <nav className="flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 text-sm tracking-wide group ${
                    pathname === link.href
                      ? "text-[rgb(226,34,40)]"
                      : "text-black/60 hover:text-black/80"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -right-3 -top-2 text-[8px] text-[rgb(226,34,40)] opacity-0 group-hover:opacity-100 transition-opacity">
                      •
                    </span>
                  </span>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-[2px] left-0 right-0 h-px bg-gradient-to-r from-[rgb(226,34,40)]/0 via-[rgb(226,34,40)] to-[rgb(226,34,40)]/0"
                    />
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/contacts"
              className="relative overflow-hidden px-5 py-1.5 text-sm text-white rounded-full bg-gradient-to-r from-[rgb(226,34,40)] to-black hover:from-black hover:to-[rgb(226,34,40)] transition-all duration-300"
            >
              <span className="relative z-10 font-medium tracking-wide">
                Start Project
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
