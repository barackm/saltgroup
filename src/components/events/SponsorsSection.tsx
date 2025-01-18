"use client";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    logo: "/images/partners/LindaH.png",
    url: "https://www.instagram.com/hotellindagoma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    logo: "/images/partners/Event.png",
    url: "https://www.instagram.com/event_studios243?igsh=MW53ZGZuMGZkdWtvZg==",
  },
  {
    logo: "/images/partners/QC.png",
    url: "https://www.instagram.com/quickcolor_solutions_?igsh=ZHI4a3Z2cHlubWoy",
  },
  {
    logo: "/images/partners/CC.png",
    url: "https://www.instagram.com/champions__choice?igsh=MXV5Ymh3eG02bnFpcA==",
  },
  {
    logo: "/images/partners/KY.png",
    url: "https://www.instagram.com/keydrcongo?igsh=MTkxazN5ZG1tY3MxZw==",
  },
  {
    logo: "/images/partners/IMZ.png",
    url: "https://www.instagram.com/imzibrand?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export const SponsorsSection = () => {
  return (
    <section className="min-h-screen relative bg-[rgb(226,34,40)] flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <h2 className="font-gramatica text-5xl sm:text-7xl font-bold text-white mb-4">
            Our Partners
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-16 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 place-items-center">
            {partners.map((partner, index) => (
              <Link
                key={index}
                className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
                target="_blank"
                href={partner.url}
              >
                <Image
                  src={partner.logo}
                  alt={`Partner logo ${index + 1}`}
                  width={350}
                  height={210}
                  className="object-contain w-full h-28"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
};
