"use client";
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Notre Adresse",
    details: "123 Avenue des Champs-Élysées, 75008 Paris, France",
  },
  {
    icon: <FiPhone />,
    title: "Téléphone",
    details: "+33 1 23 45 67 89",
  },
  {
    icon: <FiMail />,
    title: "Email",
    details: "contact@saltevents.fr",
  },
  {
    icon: <FiClock />,
    title: "Horaires",
    details: "Lun - Ven: 9h00 - 18h00",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-mono text-[rgb(226,34,40)] tracking-wider mb-4">
              CONTACTEZ-NOUS
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black/90 mb-6">
              Commençons à
              <span className="block text-[rgb(226,34,40)] mt-2">
                Planifier Ensemble
              </span>
            </h1>
            <p className="text-lg text-black/60">
              Prenez contact avec nous pour donner vie à votre prochain
              événement exceptionnel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 pb-20">
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20"
                  >
                    <div className="text-[rgb(226,34,40)] text-xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-black/80 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/60">{item.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black/5 backdrop-blur-sm rounded-xl p-8">
                <h3 className="font-medium text-black/80 mb-4">
                  Horaires d&apos;Ouverture
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-black/60">Lundi - Vendredi</span>
                    <span className="text-black/80">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/60">Samedi</span>
                    <span className="text-black/80">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/60">Dimanche</span>
                    <span className="text-black/80">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-black/60 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-black/5 border-0 focus:ring-2 focus:ring-[rgb(226,34,40)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-black/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-black/5 border-0 focus:ring-2 focus:ring-[rgb(226,34,40)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-black/60 mb-2">
                    Type d&apos;Événement
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-black/5 border-0 focus:ring-2 focus:ring-[rgb(226,34,40)]">
                    <option>Mariage</option>
                    <option>Événement Corporatif</option>
                    <option>Soirée Privée</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-black/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/5 border-0 focus:ring-2 focus:ring-[rgb(226,34,40)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[rgb(226,34,40)] text-white rounded-lg hover:bg-black transition-colors duration-300"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
