"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reward } from "@/types/customer";

interface RewardsManagerProps {
    rewards: Reward[];
    onRewardsUpdate: (rewards: Reward[]) => void;
}

export function RewardsManager({ rewards, onRewardsUpdate }: RewardsManagerProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [newReward, setNewReward] = useState<Partial<Reward>>({
        name: "",
        description: "",
        pointsRequired: 50,
    });

    const handleAddReward = () => {
        if (!newReward.name || !newReward.description || !newReward.pointsRequired) return;

        const reward: Reward = {
            id: Date.now().toString(),
            name: newReward.name,
            description: newReward.description,
            pointsRequired: newReward.pointsRequired,
            isRedeemed: false,
        };

        onRewardsUpdate([...rewards, reward]);
        setNewReward({ name: "", description: "", pointsRequired: 50 });
        setIsAdding(false);
    };

    const handleDeleteReward = (rewardId: string) => {
        onRewardsUpdate(rewards.filter((r) => r.id !== rewardId));
    };

    const handleUpdatePoints = (rewardId: string, points: number) => {
        onRewardsUpdate(
            rewards.map((r) =>
                r.id === rewardId ? { ...r, pointsRequired: points } : r
            )
        );
    };

    return (
        <div className="mt-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-black">
                        Configuration des récompenses
                    </h3>
                    <p className="text-gray-600 mt-1">
                        Définissez les récompenses et les points nécessaires
                    </p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 text-sm font-medium flex items-center gap-2"
                >
                    <span>{isAdding ? "Annuler" : "Nouvelle récompense"}</span>
                    {!isAdding && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isAdding && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                    >
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        Nom de la récompense
                                    </label>
                                    <input
                                        type="text"
                                        value={newReward.name}
                                        onChange={(e) =>
                                            setNewReward({ ...newReward, name: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none text-black bg-white placeholder-gray-400"
                                        placeholder="Ex: Café gratuit"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        value={newReward.description}
                                        onChange={(e) =>
                                            setNewReward({ ...newReward, description: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none text-black bg-white placeholder-gray-400"
                                        placeholder="Ex: Un café de votre choix offert"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        Points requis
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            step="10"
                                            value={newReward.pointsRequired}
                                            onChange={(e) =>
                                                setNewReward({
                                                    ...newReward,
                                                    pointsRequired: parseInt(e.target.value),
                                                })
                                            }
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                            <span className="px-3 py-1 bg-black text-white rounded-full text-sm">
                                                {newReward.pointsRequired} points
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddReward}
                                    disabled={!newReward.name || !newReward.description}
                                    className="flex-1 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                                >
                                    Ajouter la récompense
                                </button>
                                <button
                                    onClick={() => setIsAdding(false)}
                                    className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 transition-colors font-medium"
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid gap-4">
                {rewards.map((reward) => (
                    <motion.div
                        key={reward.id}
                        layout
                        className="bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-black text-lg">{reward.name}</h4>
                                <p className="text-gray-600 mt-1">{reward.description}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                                        <input
                                            type="number"
                                            min="10"
                                            max="500"
                                            step="10"
                                            value={reward.pointsRequired}
                                            onChange={(e) =>
                                                handleUpdatePoints(reward.id, parseInt(e.target.value) || 50)
                                            }
                                            className="w-16 bg-transparent text-center text-black font-medium focus:outline-none"
                                        />
                                        <span className="text-gray-600">pts</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        step="10"
                                        value={reward.pointsRequired}
                                        onChange={(e) =>
                                            handleUpdatePoints(reward.id, parseInt(e.target.value))
                                        }
                                        className="absolute -bottom-6 left-0 w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                <button
                                    onClick={() => handleDeleteReward(reward.id)}
                                    className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {rewards.length === 0 && !isAdding && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
                    >
                        <div className="max-w-sm mx-auto">
                            <div className="bg-white p-4 rounded-full inline-block mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-black mb-2">
                                Aucune récompense configurée
                            </h4>
                            <p className="text-gray-600 mb-4">
                                Commencez par créer votre première récompense pour fidéliser vos clients
                            </p>
                            <button
                                onClick={() => setIsAdding(true)}
                                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 text-sm font-medium"
                            >
                                Créer une récompense
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
} 