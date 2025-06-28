"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CustomerFormData } from "@/types/customer";

export default function InscriptionPage() {
    const [formData, setFormData] = useState<CustomerFormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // TODO: Implémenter l'appel API pour sauvegarder les données
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation d'appel API
            setSubmitStatus({
                type: "success",
                message: "Inscription réussie ! Vous allez recevoir un email de confirmation.",
            });
            setFormData({ firstName: "", lastName: "", email: "", company: "" });
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Une erreur est survenue. Veuillez réessayer.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Rejoignez notre programme de fidélité
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Inscrivez-vous pour commencer à cumuler des points et profiter de nos récompenses exclusives.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="mt-12 space-y-6"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-black">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-black">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-black">
                                Entreprise (optionnel)
                            </label>
                            <input
                                type="text"
                                id="company"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {submitStatus.type && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`rounded-lg p-4 ${submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                                    }`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800 disabled:bg-gray-400"
                        >
                            {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
} 