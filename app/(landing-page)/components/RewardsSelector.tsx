"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Customer, Reward } from "@/types/customer";

interface RewardsSelectorProps {
    client: Customer;
    onRewardSelect: (reward: Reward) => void;
}

export function RewardsSelector({ client, onRewardSelect }: RewardsSelectorProps) {
    const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

    const availableRewards = client.rewards.filter(
        (reward) => !reward.isRedeemed && client.points >= reward.pointsRequired
    );

    const handleRewardSelect = (reward: Reward) => {
        setSelectedReward(reward);
        onRewardSelect(reward);
    };

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
        >
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium text-black">
                    Récompenses disponibles
                </h4>
                <span className="text-sm text-gray-600">
                    {client.points} points disponibles
                </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {client.rewards.map((reward) => {
                    const isAvailable = client.points >= reward.pointsRequired;
                    const progressPercentage = Math.min(
                        (client.points / reward.pointsRequired) * 100,
                        100
                    );

                    return (
                        <motion.div
                            key={reward.id}
                            className={`relative overflow-hidden rounded-lg border p-4 ${reward.isRedeemed
                                    ? "border-green-200 bg-green-50"
                                    : isAvailable
                                        ? "border-yellow-200 bg-yellow-50"
                                        : "border-gray-200 bg-gray-50"
                                }`}
                        >
                            {/* Barre de progression */}
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    className={`h-full ${reward.isRedeemed
                                            ? "bg-green-500"
                                            : isAvailable
                                                ? "bg-yellow-500"
                                                : "bg-gray-400"
                                        }`}
                                />
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h5 className="font-medium text-black">{reward.name}</h5>
                                    <p className="text-sm text-gray-600">{reward.description}</p>
                                    <p className="mt-1 text-sm font-medium">
                                        {reward.pointsRequired} points requis
                                    </p>
                                </div>

                                {!reward.isRedeemed && (
                                    <button
                                        onClick={() => handleRewardSelect(reward)}
                                        disabled={!isAvailable}
                                        className={`ml-4 rounded-lg px-4 py-2 text-sm font-medium ${isAvailable
                                                ? "bg-black text-white hover:bg-gray-800"
                                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            }`}
                                    >
                                        {isAvailable ? "Utiliser" : "Pas assez de points"}
                                    </button>
                                )}

                                {reward.isRedeemed && (
                                    <span className="ml-4 rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                                        Déjà utilisé
                                    </span>
                                )}
                            </div>

                            {/* Indicateur de progression */}
                            <p className="mt-2 text-sm text-gray-600">
                                Progression : {client.points} / {reward.pointsRequired} points
                                {!reward.isRedeemed &&
                                    !isAvailable &&
                                    ` (${reward.pointsRequired - client.points} points restants)`}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {client.rewards.every((r) => r.isRedeemed) && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-600"
                >
                    Toutes les récompenses ont été utilisées !
                </motion.p>
            )}

            {client.rewards.length === 0 && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-600"
                >
                    Aucune récompense disponible pour le moment.
                </motion.p>
            )}
        </motion.div>
    );
} 