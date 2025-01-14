"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowDown,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";
import About from "@/components/about";
import Activities from "@/components/activities";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-black/20"
            whileHover={{ scale: 1.5, backgroundColor: "rgb(226,34,40)" }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <motion.div
          className="flex flex-col gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-black/20 to-transparent" />
          {[
            { icon: <FiInstagram size={24} />, href: "#" },
            { icon: <FiTwitter size={24} />, href: "#" },
            { icon: <FiLinkedin size={24} />, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.2, color: "rgb(226,34,40)" }}
              className="text-black/70 hover:text-[rgb(226,34,40)] transition-colors p-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {social.icon}
            </motion.a>
          ))}
          <div className="h-24 w-[1px] bg-gradient-to-b from-black/20 via-black/20 to-transparent" />
        </motion.div>
      </motion.div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6 sm:space-y-8 pt-12 lg:pt-0"
            >
              <div className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-black/5 shadow-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(226,34,40)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(226,34,40)]"></span>
                </span>
                <p className="text-xs font-medium text-black/60 tracking-wide">
                  Nous acceptons de nouveaux projets
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-mono text-[rgb(226,34,40)] tracking-wider">
                  PLANIFICATION D&apos;ÉVÉNEMENTS HAUT DE GAMME
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black/90">
                  Créez Votre
                  <span className="block text-[rgb(226,34,40)] mt-2">
                    Moment Parfait
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-black/60 max-w-lg leading-relaxed">
                  Nous transformons vos occasions ordinaires en souvenirs
                  extraordinaires, avec une attention méticuleuse portée à
                  chaque détail.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/contacts"
                  className="group relative px-8 py-4 bg-[rgb(226,34,40)] text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Les activités</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
                <button className="group flex items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black/10 group-hover:border-[rgb(226,34,40)] transition-colors">
                    <FiPlay className="w-4 h-4 text-black/60 group-hover:text-[rgb(226,34,40)] transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-black/60 group-hover:text-black transition-colors">
                    Voir la Vidéo
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/5 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Elegant Event Planning"
                  className="object-cover w-full h-full scale-105"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:-left-8 lg:translate-x-0 backdrop-blur-md bg-white/40 p-6 rounded-xl shadow-2xl z-20 border border-white/20 w-[280px]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[rgb(226,34,40)]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-[rgb(226,34,40)] text-2xl">★</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[rgb(226,34,40)]/10 rounded-full blur-xl"
                    />
                  </div>
                  <div className="backdrop-blur-none">
                    <p className="font-semibold text-2xl text-black/80">500+</p>
                    <p className="text-sm text-black/60">Événements Réussis</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-black/50">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-black/50" />
          </motion.div>
        </motion.div>
      </section>
      <About />
      <Activities />
      <Contact />
    </main>
  );
}
