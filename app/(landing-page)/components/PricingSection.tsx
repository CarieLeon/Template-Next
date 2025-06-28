"use client";

import { motion } from "framer-motion";

const features = [
    {
        name: "Carte de fidélité digitale",
        description: "Personnalisable à votre image",
        included: true
    },
    {
        name: "QR codes illimités",
        description: "Pour tous vos clients",
        included: true
    },
    {
        name: "Dashboard analytics",
        description: "Suivi en temps réel",
        included: true
    },
    {
        name: "Support prioritaire",
        description: "Réponse sous 24h",
        included: true
    },
    {
        name: "Kit de démarrage",
        description: "Matériel physique inclus",
        included: true
    },
    {
        name: "Statistiques avancées",
        description: "Analyses détaillées",
        included: true
    }
];

export function PricingSection() {
    return (
        <section className="relative py-24 overflow-hidden" id="pricing">
            {/* Fond décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#000000_0%,_transparent_60%)] opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-gray-900 bg-opacity-5 rounded-full text-gray-900 text-sm font-medium mb-4">
                        Tarification
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Une offre simple et transparente
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Tout ce dont vous avez besoin pour digitaliser votre programme de fidélité,
                        sans engagement et avec un essai gratuit de 14 jours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Offre d'essai */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl shadow-xl overflow-hidden group"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Essai Gratuit
                                    </h3>
                                    <p className="text-gray-600">
                                        Testez toutes les fonctionnalités
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-bold text-gray-900">0€</span>
                                    <span className="text-gray-500 block text-sm">14 jours</span>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{feature.name}</p>
                                            <p className="text-sm text-gray-500">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] font-medium">
                                Commencer l'essai gratuit
                            </button>
                        </div>
                    </motion.div>

                    {/* Offre Premium */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gray-900 rounded-3xl shadow-xl overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 opacity-20" />

                        <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-sm font-medium">
                                Populaire
                            </span>
                        </div>

                        <div className="p-8 relative">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Premium
                                    </h3>
                                    <p className="text-gray-300">
                                        La solution complète
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-bold text-white">35€</span>
                                    <span className="text-gray-300 block text-sm">/mois</span>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{feature.name}</p>
                                            <p className="text-sm text-gray-300">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-[1.02] font-medium">
                                Commencer maintenant
                            </button>

                            <p className="text-center text-sm text-gray-400 mt-4">
                                Sans engagement - Annulation à tout moment
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 bg-opacity-5 rounded-full">
                        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-900 font-medium">Des questions ?</span>
                    </div>
                    <p className="text-gray-600 mt-2 mb-6">
                        Notre équipe est là pour vous aider à démarrer
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 font-medium group">
                        <span>Contactez-nous</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
} 