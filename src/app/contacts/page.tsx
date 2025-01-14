"use client";
import React from "react";
import { motion } from "framer-motion";
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

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-full bg-[rgb(226,34,40)]/5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgb(226,34,40)]/5 rounded-full filter blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
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
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 pb-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20"
                  >
                    <div className="text-[rgb(226,34,40)] text-xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-black/80 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/60">{item.details}</p>
                  </motion.div>
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20"
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
