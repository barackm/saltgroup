"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="min-h-[70vh] relative overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgb(226,34,40)]/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-6">
            <h1
              data-aos="fade-down"
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              @Salt_evnt
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            >
              Event
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xl sm:text-2xl text-white/90"
            >
              ✨ On transforme vos idées en expériences uniques
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-wrap justify-center gap-6 text-lg text-white/80"
            >
              <span>🎤 Événements</span>
              <span>💡 Stratégie</span>
              <span>🗣️ Communication</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[rgb(226,34,40)]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div data-aos="fade-up" className="inline-block">
              <span className="px-4 py-1.5 bg-[rgb(226,34,40)]/10 rounded-full text-sm font-mono text-[rgb(226,34,40)] tracking-wider border border-[rgb(226,34,40)]/20">
                VISION
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900"
            >
              Rendre le monde meilleur
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgb(226,34,40)] to-transparent mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[rgb(226,34,40)]/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-[rgb(226,34,40)]/10 rounded-full text-sm font-mono text-[rgb(226,34,40)] tracking-wider border border-[rgb(226,34,40)]/20">
                MISSION
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900">
              Inspirer et équiper
            </h2>

            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgb(226,34,40)] to-transparent mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
