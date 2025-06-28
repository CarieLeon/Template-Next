"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        title: "Dashboard",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        path: "/dashboard"
    },
    {
        title: "Statistiques",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        path: "/dashboard/stats"
    },
    {
        title: "Clients",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        path: "/dashboard/clients"
    },
    {
        title: "Récompenses",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        path: "/dashboard/rewards"
    }
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 fixed top-0 left-0 right-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <Link href="/" className="text-white text-xl font-semibold ml-4 hover:text-white/80 transition-colors">
                            FidelityApp
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors relative">
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">2</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
                            MA
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar pour mobile */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isMenuOpen ? 0 : "-100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-y-0 left-0 w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 p-4 lg:hidden z-50 pt-20"
            >
                <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                                isActive(item.path)
                                    ? "bg-white/20 text-white"
                                    : "text-white hover:bg-white/10"
                            }`}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </motion.div>

            {/* Sidebar pour desktop */}
            <div className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 p-4 pt-20">
                <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className={`flex items-center gap-2 p-3 rounded-lg transition-all transform hover:scale-105 ${
                                isActive(item.path)
                                    ? "bg-white/20 text-white"
                                    : "text-white hover:bg-white/10"
                            }`}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Contenu principal */}
            <main className="lg:pl-64 pt-20">
                <div className="max-w-7xl mx-auto p-4">
                    {children}
                </div>
            </main>

            {/* Overlay pour mobile */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    );
} 