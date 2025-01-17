"use client";
import Link from "next/link";
import { FiInstagram, FiArrowUp } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/images/grp.jpg"
                  alt="SALT Events Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </Link>
              <p className="text-sm text-white/60 font-medium">
                Créant des moments inoubliables
              </p>
            </div>

            <div className="flex gap-8 text-sm font-medium">
              {[
                { label: "À Propos", href: "/about" },
                { label: "Events", href: "/events/sans-tabou-conference" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/60 hover:text-[rgb(226,34,40)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {[FiInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/salt_evnt?igsh=MWg2MXdxZGU3dGtmOQ=="
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center
                           text-white/60 hover:text-[rgb(226,34,40)] hover:bg-white/10
                           transition-all hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm text-white/40">
                © {new Date().getFullYear()} SALT Events
              </span>
              <Link
                href="/privacy"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                Confidentialité
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/40">Powered by</span>
              <a
                href="https://imzibrand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(226,34,40)] font-medium transition-colors"
              >
                IMZIBRAND
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center
                       text-white/60 hover:text-[rgb(226,34,40)] hover:bg-white/10
                       transition-all hover:-translate-y-1"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
