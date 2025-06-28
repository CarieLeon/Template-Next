"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Marie Dupont",
        role: "Propriétaire de Café",
        content: "Depuis que nous utilisons cette solution, nos clients adorent collectionner les points. C'est simple à utiliser et ça nous a permis d'augmenter significativement le nombre de clients réguliers.",
        image: "/images/testimonials/1.jpg"
    },
    {
        name: "Thomas Laurent",
        role: "Gérant de Restaurant",
        content: "La transition vers le digital a été très simple. Nos clients apprécient de ne plus avoir à transporter de carte physique et nous avons une bien meilleure visibilité sur leur fidélité.",
        image: "/images/testimonials/2.jpg"
    },
    {
        name: "Sophie Martin",
        role: "Propriétaire de Salon de Coiffure",
        content: "Le système est vraiment intuitif et nos clients adorent voir leurs points s'accumuler. Le support client est également très réactif quand on a besoin d'aide.",
        image: "/images/testimonials/3.jpg"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-white" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-black bg-opacity-5 rounded-full text-black text-sm font-medium mb-4">
                        Témoignages
                    </span>
                    <h2 className="text-4xl font-bold text-black mb-4">
                        Ils nous font confiance
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez comment nos clients utilisent notre solution pour fidéliser leur clientèle
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white border-2 border-black rounded-3xl p-8 hover:scale-[1.02] transition-transform"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <blockquote>
                                <svg className="w-8 h-8 text-black opacity-10 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="text-gray-600 leading-relaxed">
                                    {testimonial.content}
                                </p>
                            </blockquote>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium group">
                        <span>Rejoignez-les</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
} 