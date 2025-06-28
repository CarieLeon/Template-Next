"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const rewards = [
    {
        id: 1,
        title: "Café Offert",
        pointsRequired: 100,
        description: "Un café de votre choix offert",
        claimed: 45,
        type: "boisson"
    },
    {
        id: 2,
        title: "Croissant Gratuit",
        pointsRequired: 50,
        description: "Un croissant frais du jour",
        claimed: 78,
        type: "nourriture"
    },
    {
        id: 3,
        title: "Menu Déjeuner",
        pointsRequired: 500,
        description: "Un menu déjeuner complet",
        claimed: 12,
        type: "menu"
    }
];

export default function RewardsPage() {
    const [selectedType, setSelectedType] = useState("all");

    const filteredRewards = rewards.filter(reward => 
        selectedType === "all" || reward.type === selectedType
    );

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-between"
            >
                <h2 className="text-2xl font-bold text-white">Programme de Fidélité</h2>
                <div className="flex gap-4">
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        <option value="all">Toutes les récompenses</option>
                        <option value="boisson">Boissons</option>
                        <option value="nourriture">Nourriture</option>
                        <option value="menu">Menus</option>
                    </select>
                    <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                        + Nouvelle Récompense
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRewards.map((reward, index) => (
                    <motion.div
                        key={reward.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                                    {reward.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {reward.description}
                                </p>
                            </div>
                            <button className="text-white/60 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">Points requis</span>
                                <span className="text-white font-medium">{reward.pointsRequired} pts</span>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Utilisations</span>
                                    <span className="text-white">{reward.claimed}</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white/30 rounded-full transition-all"
                                        style={{ width: `${(reward.claimed / 100) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                                Modifier
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mt-8"
            >
                <h3 className="text-lg font-medium text-white mb-4">Statistiques des Récompenses</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h4 className="text-sm text-gray-400">Total Récompenses</h4>
                        <p className="text-2xl font-bold text-white mt-1">135</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h4 className="text-sm text-gray-400">Ce Mois</h4>
                        <p className="text-2xl font-bold text-white mt-1">24</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h4 className="text-sm text-gray-400">Points Échangés</h4>
                        <p className="text-2xl font-bold text-white mt-1">12,450</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 