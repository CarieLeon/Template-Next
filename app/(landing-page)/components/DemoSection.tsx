"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Customer, Reward } from "@/types/customer";
import { RewardsSelector } from "./RewardsSelector";
import { RewardsManager } from "./RewardsManager";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const defaultRewards: Reward[] = [
    {
        id: "1",
        name: "Café offert",
        description: "Un café de votre choix gratuit",
        pointsRequired: 50,
        isRedeemed: false
    },
    {
        id: "2",
        name: "Réduction 10%",
        description: "10% de réduction sur votre prochain achat",
        pointsRequired: 100,
        isRedeemed: false
    },
    {
        id: "3",
        name: "Produit gratuit",
        description: "Un produit gratuit au choix parmi une sélection",
        pointsRequired: 200,
        isRedeemed: false
    }
];

export function DemoSection() {
    const [availableRewards, setAvailableRewards] = useState<Reward[]>(defaultRewards);
    const [clients, setClients] = useState<Customer[]>([
        {
            id: "1",
            firstName: "Sophie",
            lastName: "Martin",
            email: "sophie.martin@example.com",
            points: 45,
            rewards: [...defaultRewards],
            lastVisit: "2024-03-15"
        },
        {
            id: "2",
            firstName: "Thomas",
            lastName: "Bernard",
            email: "thomas.bernard@example.com",
            points: 30,
            rewards: [...defaultRewards],
            lastVisit: "2024-03-14"
        },
        {
            id: "3",
            firstName: "Marie",
            lastName: "Dubois",
            email: "marie.dubois@example.com",
            points: 25,
            rewards: [...defaultRewards],
            lastVisit: "2024-03-13"
        },
    ]);

    const [selectedClient, setSelectedClient] = useState<Customer | null>(null);
    const [nouveauClient, setNouveauClient] = useState({ nom: "" });
    const [showRewards, setShowRewards] = useState<string | null>(null);

    const handleRewardsUpdate = (newRewards: Reward[]) => {
        setAvailableRewards(newRewards);
        // Mettre à jour les récompenses pour tous les clients
        setClients(clients.map(client => ({
            ...client,
            rewards: newRewards.map(reward => ({
                ...reward,
                isRedeemed: client.rewards.find(r => r.id === reward.id)?.isRedeemed || false
            }))
        })));
    };

    const handleRewardSelect = (clientId: string, reward: Reward) => {
        setClients(clients.map(client => {
            if (client.id === clientId) {
                return {
                    ...client,
                    rewards: client.rewards.map(r =>
                        r.id === reward.id
                            ? { ...r, isRedeemed: true, redeemedAt: new Date().toISOString() }
                            : r
                    )
                };
            }
            return client;
        }));
        setShowRewards(null);
    };

    const ajouterClient = () => {
        if (nouveauClient.nom.trim()) {
            const [firstName, lastName] = nouveauClient.nom.split(" ");
            const newClient: Customer = {
                id: (clients.length + 1).toString(),
                firstName: firstName || nouveauClient.nom,
                lastName: lastName || "",
                email: `${nouveauClient.nom.toLowerCase().replace(" ", ".")}@example.com`,
                points: 0,
                rewards: [...availableRewards],
                lastVisit: new Date().toISOString().split("T")[0],
            };
            setClients([...clients, newClient]);
            setNouveauClient({ nom: "" });
        }
    };

    const ajouterPoints = (clientId: string, points: number = 5) => {
        setClients(clients.map(client => {
            if (client.id === clientId) {
                const newPoints = client.points + points;
                const updatedRewards = client.rewards.map(reward => ({
                    ...reward,
                    isRedeemed: reward.isRedeemed || (newPoints >= reward.pointsRequired)
                }));

                return {
                    ...client,
                    points: newPoints,
                    rewards: updatedRewards,
                    lastVisit: new Date().toISOString().split("T")[0]
                };
            }
            return client;
        }));
    };

    // Données pour le graphique
    const chartData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
            {
                label: 'Points de fidélité',
                data: [30, 45, 60, 70, 85, 100],
                borderColor: 'rgb(0, 0, 0)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgb(0, 0, 0)',
                titleColor: 'rgb(255, 255, 255)',
                bodyColor: 'rgb(255, 255, 255)',
                padding: 12,
                displayColors: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    color: 'rgb(0, 0, 0)',
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'rgb(0, 0, 0)',
                }
            },
        },
    };

    return (
        <section className="py-24 bg-white" id="demo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Démonstration Interactive
                    </h2>
                    <p className="text-black">
                        Découvrez comment fonctionne notre système de fidélité
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Graphique et Configuration des récompenses */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-black">Évolution des points</h3>
                            <Line data={chartData} options={chartOptions} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                        >
                            <RewardsManager
                                rewards={availableRewards}
                                onRewardsUpdate={handleRewardsUpdate}
                            />
                        </motion.div>
                    </div>

                    {/* Liste des clients */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-black">Clients</h3>

                        {/* Ajout de client */}
                        <div className="flex gap-2 mb-6">
                            <input
                                type="text"
                                value={nouveauClient.nom}
                                onChange={(e) => setNouveauClient({ nom: e.target.value })}
                                placeholder="Nom du client"
                                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                            />
                            <button
                                onClick={ajouterClient}
                                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Ajouter
                            </button>
                        </div>

                        {/* Liste des clients */}
                        <div className="space-y-4">
                            {clients.map((client) => (
                                <motion.div
                                    key={client.id}
                                    className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-100"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h4 className="font-medium text-black">
                                                {client.firstName} {client.lastName}
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Dernière visite : {client.lastVisit}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-semibold text-black">{client.points} pts</span>
                                            <button
                                                onClick={() => ajouterPoints(client.id)}
                                                className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                                            >
                                                +5 pts
                                            </button>
                                        </div>
                                    </div>

                                    {/* Aperçu des récompenses */}
                                    <div className="mt-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-gray-600">
                                                {client.rewards.filter(r => r.isRedeemed).length} récompense(s) utilisée(s)
                                            </div>
                                            <button
                                                onClick={() => setShowRewards(showRewards === client.id ? null : client.id)}
                                                className="text-sm text-black hover:text-gray-600 transition-colors"
                                            >
                                                {showRewards === client.id ? "Masquer" : "Voir les récompenses"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sélecteur de récompenses */}
                                    <AnimatePresence>
                                        {showRewards === client.id && (
                                            <RewardsSelector
                                                client={client}
                                                onRewardSelect={(reward) => handleRewardSelect(client.id, reward)}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 