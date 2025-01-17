"use client";
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
  return (
    <section className="min-h-screen relative bg-[rgb(226,34,40)] flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <h2
            data-aos="fade-up"
            className="font-gramatica text-6xl sm:text-7xl font-bold text-white mb-4"
          >
            Our Partners
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-3xl shadow-2xl p-16 max-w-5xl mx-auto w-full"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 place-items-center">
            {sampleLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={350}
                  height={210}
                  className="object-contain w-full h-28"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
};
