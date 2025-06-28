"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-flex items-center rounded-full border border-primary px-6 py-2"
        >
          <span className="text-sm text-text-secondary">Solution de fidélité 100% digitale</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Remplacez vos cartes<br />
          de fidélité physiques
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-xl text-text-secondary mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Solution SaaS complète pour les petits commerces. QR codes,
          points, récompenses - tout en digital pour fidéliser vos clients sans papier.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#demo"
            className="px-8 py-4 bg-primary text-text-light rounded-lg hover:bg-accent-hover transition-colors"
          >
            Voir la démo
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-secondary-dark transition-colors"
          >
            Nous contacter
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">35€</div>
            <div className="text-text-secondary">par mois</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">14 jours</div>
            <div className="text-text-secondary">d&apos;essai gratuit</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-secondary">digital</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
