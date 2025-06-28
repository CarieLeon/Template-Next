"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Client = {
    id: string;
    nom: string;
    points: number;
    derniereVisite: string;
};

export function DemoSection() {
    const [clients, setClients] = useState<Client[]>([
        { id: '1', nom: 'Sophie Martin', points: 45, derniereVisite: '2024-03-15' },
        { id: '2', nom: 'Thomas Bernard', points: 30, derniereVisite: '2024-03-14' },
        { id: '3', nom: 'Marie Dubois', points: 25, derniereVisite: '2024-03-13' },
    ]);

    const [nouveauClient, setNouveauClient] = useState({ nom: '' });

    const ajouterClient = () => {
        if (nouveauClient.nom.trim()) {
            const newClient: Client = {
                id: (clients.length + 1).toString(),
                nom: nouveauClient.nom,
                points: 0,
                derniereVisite: new Date().toISOString().split('T')[0],
            };
            setClients([...clients, newClient]);
            setNouveauClient({ nom: '' });
        }
    };

    const ajouterPoints = (clientId: string) => {
        setClients(clients.map(client =>
            client.id === clientId
                ? { ...client, points: client.points + 5, derniereVisite: new Date().toISOString().split('T')[0] }
                : client
        ));
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
                    {/* Graphique */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-black">Évolution des points</h3>
                        <Line data={chartData} options={chartOptions} />
                    </motion.div>

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
                                <div
                                    key={client.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
                                >
                                    <div>
                                        <h4 className="font-medium text-black">{client.nom}</h4>
                                        <p className="text-sm text-gray-600">
                                            Dernière visite : {client.derniereVisite}
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
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 