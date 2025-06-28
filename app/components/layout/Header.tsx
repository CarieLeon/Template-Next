"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation } from "../../../config/navigation";
import { cn } from "../../../utils/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white border-b border-gray-100",
        isScrolled ? "shadow-sm" : ""
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            FidélitéPro
          </Link>

          {/* Navigation principale */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton Essai gratuit */}
          <Link
            href="/essai-gratuit"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
              "bg-black text-white hover:bg-gray-800"
            )}
          >
            Essai gratuit
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
