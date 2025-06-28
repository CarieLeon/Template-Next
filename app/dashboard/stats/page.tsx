"use client";

import { motion } from "framer-motion";

const stats = [
    {
        title: "Clients Actifs",
        value: "324",
        change: "+12%",
        isPositive: true
    },
    {
        title: "Points Distribués",
        value: "12,543",
        change: "+23%",
        isPositive: true
    },
    {
        title: "Récompenses Utilisées",
        value: "89",
        change: "+8%",
        isPositive: true
    },
    {
        title: "Taux de Conversion",
        value: "68%",
        change: "-2%",
        isPositive: false
    }
];

export default function StatsPage() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
                        <div className="mt-2 flex items-baseline">
                            <p className="text-3xl font-semibold text-white">{stat.value}</p>
                            <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                                stat.isPositive ? "text-green-400" : "text-red-400"
                            }`}>
                                {stat.change}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                    <h3 className="text-lg font-medium text-white mb-4">Activité Mensuelle</h3>
                    <div className="h-64 flex items-end space-x-2">
                        {[...Array(12)].map((_, i) => {
                            const height = Math.random() * 100;
                            return (
                                <div
                                    key={i}
                                    className="flex-1 bg-white/20 rounded-t hover:bg-white/30 transition-colors"
                                    style={{ height: `${height}%` }}
                                />
                            );
                        })}
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-gray-400">
                        <span>Jan</span>
                        <span>Déc</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                    <h3 className="text-lg font-medium text-white mb-4">Distribution des Points</h3>
                    <div className="relative h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full border-8 border-white/20 flex items-center justify-center text-2xl font-bold text-white">
                                78%
                            </div>
                        </div>
                        <div className="absolute inset-0">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="10"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.5)"
                                    strokeWidth="10"
                                    strokeDasharray="282.7"
                                    strokeDashoffset="62.2"
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 