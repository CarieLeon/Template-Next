"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const settings = {
    establishment: {
        name: "Le Café des Artistes",
        address: "15 Rue de la Paix, 75002 Paris",
        phone: "+33 1 23 45 67 89",
        email: "contact@cafedesartistes.fr",
        openingHours: "Lun-Sam: 8h-22h, Dim: 9h-20h"
    },
    loyalty: {
        pointsPerVisit: 10,
        pointsPerEuro: 1,
        minimumPurchase: 5
    }
};

export default function AdminPage() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(settings);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        // Ici, vous ajouteriez la logique pour sauvegarder les modifications
    };

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <h2 className="text-2xl font-bold text-white">Administration</h2>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                >
                    {isEditing ? "Annuler" : "Modifier"}
                </button>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations de l'établissement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
                >
                    <h3 className="text-lg font-medium text-white mb-4">Informations de l'établissement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Nom de l'établissement
                            </label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                value={formData.establishment.name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    establishment: {
                                        ...formData.establishment,
                                        name: e.target.value
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Adresse
                            </label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                value={formData.establishment.address}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    establishment: {
                                        ...formData.establishment,
                                        address: e.target.value
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                disabled={!isEditing}
                                value={formData.establishment.phone}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    establishment: {
                                        ...formData.establishment,
                                        phone: e.target.value
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                disabled={!isEditing}
                                value={formData.establishment.email}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    establishment: {
                                        ...formData.establishment,
                                        email: e.target.value
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Horaires d'ouverture
                            </label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                value={formData.establishment.openingHours}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    establishment: {
                                        ...formData.establishment,
                                        openingHours: e.target.value
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Programme de fidélité */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
                >
                    <h3 className="text-lg font-medium text-white mb-4">Programme de fidélité</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Points par visite
                            </label>
                            <input
                                type="number"
                                disabled={!isEditing}
                                value={formData.loyalty.pointsPerVisit}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    loyalty: {
                                        ...formData.loyalty,
                                        pointsPerVisit: parseInt(e.target.value)
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Points par euro
                            </label>
                            <input
                                type="number"
                                disabled={!isEditing}
                                value={formData.loyalty.pointsPerEuro}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    loyalty: {
                                        ...formData.loyalty,
                                        pointsPerEuro: parseInt(e.target.value)
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Achat minimum (€)
                            </label>
                            <input
                                type="number"
                                disabled={!isEditing}
                                value={formData.loyalty.minimumPurchase}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    loyalty: {
                                        ...formData.loyalty,
                                        minimumPurchase: parseInt(e.target.value)
                                    }
                                })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50"
                            />
                        </div>
                    </div>
                </motion.div>

                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end gap-4"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                setFormData(settings);
                                setIsEditing(false);
                            }}
                            className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                        >
                            Enregistrer
                        </button>
                    </motion.div>
                )}
            </form>
        </div>
    );
} 