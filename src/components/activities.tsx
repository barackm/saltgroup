"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Mariages de Luxe",
    description:
      "Des célébrations élégantes et personnalisées pour votre jour spécial.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
    features: [
      "Planification complète",
      "Design personnalisé",
      "Coordination jour J",
      "Services de traiteur",
    ],
  },
  {
    title: "Événements Corporatifs",
    description:
      "Des conférences et séminaires professionnels qui impressionnent.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    features: [
      "Gestion logistique",
      "Équipement audiovisuel",
      "Service de restauration",
      "Animations sur mesure",
    ],
  },
  {
    title: "Soirées Privées",
    description: "Des moments inoubliables pour vos célébrations personnelles.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200",
    features: [
      "Décoration thématique",
      "Animations exclusives",
      "Menu personnalisé",
      "Organisation complète",
    ],
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-sm font-mono text-[rgb(226,34,40)] tracking-wider mb-4">
              NOS ACTIVITÉS
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black/90 mb-6">
              Une Expertise
              <span className="block text-[rgb(226,34,40)] mt-2">
                Pour Chaque Occasion
              </span>
            </h1>
            <p className="text-lg text-black/60">
              Découvrez notre gamme de services événementiels haut de gamme,
              conçue pour répondre à vos besoins les plus exigeants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-[28rem] bg-white rounded-xl overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/50 z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="relative backdrop-blur-md bg-white/95 rounded-xl p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="absolute -top-3 left-6 px-4 py-1 bg-[rgb(226,34,40)] rounded-full">
                        <span className="text-xs font-medium text-white">
                          Service Premium
                        </span>
                      </div>

                      <h3 className="text-xl font-medium text-black/90 mb-3 mt-2">
                        {service.title}
                      </h3>
                      <p className="text-black/60 text-sm mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1 h-1 rounded-full bg-[rgb(226,34,40)]" />
                            <span className="text-black/70">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="#"
                        className="inline-flex items-center text-sm text-black/80 hover:text-[rgb(226,34,40)] transition-all group-hover:gap-3"
                      >
                        <span>Découvrir ce service</span>
                        <FiArrowRight className="ml-2 text-[rgb(226,34,40)]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
