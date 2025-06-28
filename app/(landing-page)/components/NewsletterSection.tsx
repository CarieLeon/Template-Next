"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            // TODO: Implémenter l'appel API pour sauvegarder l'email
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation d'appel API
            setStatus({
                type: "success",
                message: "Merci de votre inscription ! Vous recevrez bientôt de nos nouvelles.",
            });
            setEmail("");
        } catch (error) {
            setStatus({
                type: "error",
                message: "Une erreur est survenue. Veuillez réessayer.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-black py-24" id="newsletter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Restez informé
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres exclusives.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-12 max-w-xl"
                >
                    <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre adresse email"
                                className="w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none"
                                required
                            />
                            {status.type && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`absolute -bottom-6 left-0 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"
                                        }`}
                                >
                                    {status.message}
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 w-full rounded-lg bg-white px-6 py-3 text-black transition-colors hover:bg-gray-100 disabled:bg-gray-300 sm:mt-0 sm:w-auto"
                        >
                            {isSubmitting ? "Inscription..." : "S'inscrire"}
                        </button>
                    </form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-center text-sm text-gray-400"
                    >
                        En vous inscrivant, vous acceptez de recevoir nos communications marketing.
                        Vous pourrez vous désinscrire à tout moment.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
} 