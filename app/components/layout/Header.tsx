"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation } from "@config/navigation";
import { cn } from "@utils/cn";

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
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        "border-b border-gray-100 bg-white",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            FidélitéPro
          </Link>

          {/* Navigation principale */}
          <div className="hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-black"
                    : "text-gray-600 hover:text-black",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Boutons d'authentification */}
          <div className="flex items-center space-x-4">
            <Link
              href="/connexion"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                "text-gray-700 hover:bg-gray-100 hover:text-black",
              )}
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                "bg-black text-white hover:bg-gray-800",
              )}
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
