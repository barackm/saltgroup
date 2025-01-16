"use client";
import React from "react";
import { FiUsers, FiAward, FiHeart, FiTrendingUp } from "react-icons/fi";

const stats = [
  { icon: <FiUsers />, value: "10+", label: "Ans d'Expérience" },
  { icon: <FiAward />, value: "500+", label: "Événements Réalisés" },
  { icon: <FiHeart />, value: "300+", label: "Clients Satisfaits" },
  { icon: <FiTrendingUp />, value: "98%", label: "Taux de Réussite" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-sm font-mono text-[rgb(226,34,40)] tracking-wider">
              NOTRE HISTOIRE
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black/90">
              Créateurs de
              <span className="block text-[rgb(226,34,40)] mt-2">
                Moments Inoubliables
              </span>
            </h1>
            <p className="text-lg text-black/60 leading-relaxed">
              Avec plus d&apos;une décennie d&apos;expérience dans
              l&apos;organisation d&apos;événements, nous transformons vos
              visions en réalité. Notre engagement envers l&apos;excellence et
              notre attention aux détails rendent chaque événement
              extraordinaire.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-[rgb(226,34,40)] rounded-lg flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <p className="mt-4 text-3xl font-bold text-black/80">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-b from-white/80 to-white" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-mono text-[rgb(226,34,40)] tracking-wider mb-4">
                  NOS VALEURS
                </h2>
                <h3 className="text-4xl font-bold text-black/90 mb-6">
                  Créer des Souvenirs Éternels
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Nous croyons que chaque événement raconte une histoire unique.
                  Notre mission est de donner vie à votre vision à travers une
                  planification méticuleuse, un design créatif et une exécution
                  impeccable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "Personnalisé", desc: "Adapté à votre vision" },
                  { title: "Créatif", desc: "Solutions innovantes" },
                  { title: "Professionnel", desc: "Équipe d'experts" },
                  { title: "Minutieux", desc: "Exécution précise" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="h-12 w-12 rounded-xl bg-[rgb(226,34,40)]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(226,34,40)] transition-colors duration-300">
                      <span className="text-[rgb(226,34,40)] group-hover:text-white transition-colors duration-300 text-xl">
                        ★
                      </span>
                    </div>
                    <h4 className="font-semibold text-black/80 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-black/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
                  alt="Event Planning"
                  className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute -right-8 bottom-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs">
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-[rgb(226,34,40)]/20">
                    &quot;
                  </span>
                  <p className="text-black/80 leading-relaxed italic">
                    Notre engagement envers l&apos;excellence nous pousse à
                    créer des expériences extraordinaires qui dépassent les
                    attentes.
                  </p>
                  <span className="absolute -bottom-4 -right-2 text-4xl text-[rgb(226,34,40)]/20">
                    &quot;
                  </span>
                  <p className="text-sm text-[rgb(226,34,40)] mt-4 font-medium">
                    — Notre Mission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
