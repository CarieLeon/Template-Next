"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Title } from "@components/common/typography/Title";

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
    acceptTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une inscription
    setTimeout(() => {
      setIsLoading(false);
      // Ici on ajoutera la logique d'inscription avec Supabase plus tard
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const nextStep = () => {
    if (
      step === 1 &&
      formData.firstName &&
      formData.lastName &&
      formData.email
    ) {
      setStep(2);
    }
  };

  const prevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="mb-4 block text-2xl font-bold text-black">
            FidélitéPro
          </Link>
          <h1 className="mb-2 text-2xl font-semibold text-gray-900">
            Créer votre compte
          </h1>
          <p className="text-gray-600">
            Rejoignez des milliers de commerçants qui fidélisent leurs clients
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              1
            </div>
            <div
              className={`h-1 w-16 rounded ${
                step >= 2 ? "bg-black" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Informations personnelles
                </h3>

                {/* Prénom et Nom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Bouton suivant */}
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.firstName || !formData.lastName || !formData.email
                  }
                  className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continuer
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Informations de votre commerce
                </h3>

                {/* Nom du commerce */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Nom de votre commerce *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                    placeholder="Ex: Boulangerie Martin"
                  />
                </div>

                {/* Type de commerce */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Type de commerce *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="boulangerie">Boulangerie</option>
                    <option value="cafe">Café / Restaurant</option>
                    <option value="coiffeur">Coiffeur / Salon de beauté</option>
                    <option value="epicerie">Épicerie</option>
                    <option value="pharmacie">Pharmacie</option>
                    <option value="boutique">Boutique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Mot de passe */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Mot de passe *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                    placeholder="Minimum 8 caractères"
                  />
                </div>

                {/* Confirmation mot de passe */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirmer le mot de passe *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-black"
                    placeholder="Répétez votre mot de passe"
                  />
                </div>

                {/* Conditions d&apos;utilisation */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="ml-2 text-sm text-gray-600"
                  >
                    J&apos;accepte les{" "}
                    <Link
                      href="/conditions-utilisation"
                      className="text-black hover:underline"
                    >
                      conditions d&apos;utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-black hover:underline"
                    >
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                {/* Boutons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isLoading ||
                      !formData.businessName ||
                      !formData.businessType ||
                      !formData.password ||
                      !formData.confirmPassword ||
                      !formData.acceptTerms ||
                      formData.password !== formData.confirmPassword
                    }
                    className="flex-1 rounded-lg bg-black px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        Création...
                      </div>
                    ) : (
                      "Créer mon compte"
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          {/* Lien vers connexion */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ?{" "}
              <Link
                href="/connexion"
                className="font-medium text-black hover:underline"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
