"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Social Media Bar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6"
      >
        {[
          { icon: <FiInstagram size={24} />, href: "#" },
          { icon: <FiTwitter size={24} />, href: "#" },
          { icon: <FiLinkedin size={24} />, href: "#" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            whileHover={{ scale: 1.2, color: "rgb(226,34,40)" }}
            className="text-black/70 hover:text-[rgb(226,34,40)] transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[linear-gradient(40deg,transparent,rgba(226,34,40,0.1))]" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("/grid.png")',
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-sm font-mono text-[rgb(226,34,40)] mb-4">
                PREMIUM EVENT PLANNING
              </h2>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Craft Your
                <span className="block text-[rgb(226,34,40)]">
                  Perfect Moment
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                We specialize in turning ordinary occasions into extraordinary
                memories, with meticulous attention to every detail.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contacts"
                  className="group relative px-8 py-4 bg-[rgb(226,34,40)] text-white rounded-lg overflow-hidden"
                >
                  <span className="relative z-10">Start Planning</span>
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
                <Link
                  href="/activities"
                  className="px-8 py-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(226,34,40)]/20 to-transparent z-10" />
                <img
                  src="/event-image.jpg"
                  alt="Event Planning"
                  className="object-cover w-full h-full"
                />
              </div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(226,34,40)]/10 rounded-full flex items-center justify-center">
                    <span className="text-[rgb(226,34,40)] text-2xl font-bold">
                      ★
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">500+</p>
                    <p className="text-sm text-gray-600">Events Completed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
