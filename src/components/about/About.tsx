"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[rgb(226,34,40)]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 bg-[rgb(226,34,40)]/10 rounded-full text-sm font-mono text-[rgb(226,34,40)] tracking-wider border border-[rgb(226,34,40)]/20">
                VISION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900"
            >
              Rendre le monde meilleur
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgb(226,34,40)] to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[rgb(226,34,40)]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 bg-[rgb(226,34,40)]/10 rounded-full text-sm font-mono text-[rgb(226,34,40)] tracking-wider border border-[rgb(226,34,40)]/20">
                MISSION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900"
            >
              Inspirer et équiper
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgb(226,34,40)] to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
