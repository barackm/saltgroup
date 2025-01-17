"use client";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const sampleLogos = [
  "/images/partners/LindaH.png",
  "/images/partners/Event.png",
  "/images/partners/QC.png",
  "/images/partners/CC.png",
  "/images/partners/KY.png",
  "/images/partners/IMZ.png",
];

export const SponsorsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 left-0 sm:-left-40 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-[rgb(226,34,40)]/5 rounded-full blur-[60px] sm:blur-[120px]" />
        <div className="absolute -bottom-20 sm:-bottom-40 right-0 sm:-right-40 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-rose-500/5 rounded-full blur-[60px] sm:blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <div data-aos="fade-up" className="inline-block">
            <span className="px-4 py-1.5 bg-[rgb(226,34,40)]/10 rounded-full text-sm font-mono text-[rgb(226,34,40)] tracking-wider border border-[rgb(226,34,40)]/20">
              PARTENAIRES
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-gramatica text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Nos Partenaires
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgb(226,34,40)] to-transparent mx-auto"
          />
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Mobile view: Simple grid */}
          <div className="grid grid-cols-2 gap-12 px-4 sm:hidden">
            {sampleLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-24"
                  loading="lazy"
                  quality={75}
                />
              </div>
            ))}
          </div>

          {/* Desktop view: Animated rows */}
          <div className="hidden sm:block">
            <div className="flex space-x-20 animate-[marquee_45s_linear_infinite] mb-16">
              {[...sampleLogos, ...sampleLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-[200px] flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain w-full h-24"
                    loading="lazy"
                    quality={60}
                  />
                </div>
              ))}
            </div>

            <div className="flex space-x-20 animate-[marquee_50s_linear_infinite_reverse]">
              {[...sampleLogos.reverse(), ...sampleLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-[200px] flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain w-full h-24"
                    loading="lazy"
                    quality={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
