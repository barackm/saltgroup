"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/[0.96] text-white/80 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-[rgb(226,34,40)]">SALT</span>
                EVENTS
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Créant des moments inoubliables avec élégance et précision.
            </p>
            <div className="flex gap-4">
              {[FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[rgb(226,34,40)] flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Mariages",
                "Événements Corporatifs",
                "Soirées Privées",
                "Conférences",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-[rgb(226,34,40)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3 text-sm">
              {["À Propos", "Notre Équipe", "Carrières", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-[rgb(226,34,40)] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: FiPhone, text: "+33 1 23 45 67 89" },
                { icon: FiMail, text: "contact@saltevents.fr" },
                { icon: FiMapPin, text: "Paris, France" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/60">
                  <item.icon size={14} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} SALT Events. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
