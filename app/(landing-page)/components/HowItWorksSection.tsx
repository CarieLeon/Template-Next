"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Link from "next/link";

const steps = [
    {
        title: "Inscription Simple",
        description: "Créez votre compte en quelques minutes et configurez votre programme de fidélité selon vos besoins.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        path: "/inscription"
    },
    {
        title: "QR Code Unique",
        description: "Chaque client reçoit un QR code personnel qu'il peut facilement présenter lors de ses visites.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
        ),
        path: "/dashboard"
    },
    {
        title: "Cumul des Points",
        description: "Scannez simplement le QR code du client pour lui attribuer des points à chaque visite ou achat.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        ),
        path: "/points"
    },
    {
        title: "Récompenses",
        description: "Les clients peuvent suivre leurs points et utiliser leurs récompenses directement depuis leur smartphone.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        path: "/rewards"
    }
];

export function HowItWorksSection() {
    const [selectedModule, setSelectedModule] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-white bg-opacity-10 rounded-full text-white text-sm font-medium mb-4">
                        Fonctionnement
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Comment ça marche ?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Une solution simple et efficace pour digitaliser votre programme de fidélité
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Link href={step.path} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                                onMouseEnter={() => setSelectedModule(index)}
                                onMouseLeave={() => setSelectedModule(null)}
                            >
                                {/* Ligne de connexion */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-white/10">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" />
                                    </div>
                                )}

                                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                                    <div className="text-white mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300">
                                        {step.description}
                                    </p>

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: selectedModule === index ? "auto" : 0,
                                            opacity: selectedModule === index ? 1 : 0
                                        }}
                                        className="overflow-hidden mt-4"
                                    >
                                        <div className="h-1 w-full bg-white/10 rounded mb-4"></div>
                                        <p className="text-sm text-gray-400">
                                            Cliquez pour accéder aux détails
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link href="/inscription" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium group">
                        <span>Commencer maintenant</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 