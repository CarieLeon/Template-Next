"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const clients = [
    {
        id: 1,
        name: "Sophie Martin",
        points: 450,
        visits: 12,
        lastVisit: "2024-03-15",
        status: "active"
    },
    {
        id: 2,
        name: "Thomas Bernard",
        points: 280,
        visits: 8,
        lastVisit: "2024-03-14",
        status: "active"
    },
    {
        id: 3,
        name: "Emma Petit",
        points: 150,
        visits: 4,
        lastVisit: "2024-03-10",
        status: "inactive"
    }
];

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");

    const filteredClients = clients.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === "all" || client.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-between"
            >
                <div className="relative w-full sm:w-64">
                    <input
                        type="text"
                        placeholder="Rechercher un client..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                    <option value="all">Tous les statuts</option>
                    <option value="active">Actifs</option>
                    <option value="inactive">Inactifs</option>
                </select>

                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                    + Nouveau Client
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Nom</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Points</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Visites</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Dernière Visite</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Statut</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client, index) => (
                                <motion.tr
                                    key={client.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="px-6 py-4 text-white">{client.name}</td>
                                    <td className="px-6 py-4 text-white">{client.points}</td>
                                    <td className="px-6 py-4 text-white">{client.visits}</td>
                                    <td className="px-6 py-4 text-white">{client.lastVisit}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            client.status === "active" 
                                                ? "bg-green-400/10 text-green-400" 
                                                : "bg-red-400/10 text-red-400"
                                        }`}>
                                            {client.status === "active" ? "Actif" : "Inactif"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-white/60 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
} 