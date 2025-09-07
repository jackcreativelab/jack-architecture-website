"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Ruler, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BureauxModernes() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 dark:text-white hover:scale-105 transition-transform duration-200"
          >
            jack.architecture
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/">
              <Button
                variant="ghost"
                className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Bureaux Modernes</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                Un espace de travail innovant de 800m² qui repense l'environnement professionnel avec des espaces
                collaboratifs et du bien-être au travail.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="p-4 text-center hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <Ruler className="h-6 w-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">800m²</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Surface</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <Users className="h-6 w-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">120</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Postes</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">2024</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Année</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg dark:hover:shadow-slate-700/50 transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <MapPin className="h-6 w-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Paris</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Localisation</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            className="h-96 md:h-[600px] bg-cover bg-center rounded-2xl shadow-2xl dark:shadow-slate-700/50 transform hover:scale-[1.02] transition-all duration-700"
            style={{
              backgroundImage: `url('/modern-office-building-with-glass-facade-and-clean.jpg')`,
            }}
          ></div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Ces bureaux modernes redéfinissent l'espace de travail en privilégiant la flexibilité, la collaboration
                et le bien-être des employés. L'architecture ouverte favorise les échanges tout en préservant des
                espaces de concentration.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                La façade entièrement vitrée offre une luminosité naturelle exceptionnelle et une vue panoramique sur la
                ville, créant un environnement de travail stimulant et agréable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Aménagements</h2>
              <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mr-3"></div>
                  Open space modulable de 400m²
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mr-3"></div>
                  15 salles de réunion équipées
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mr-3"></div>
                  Espace détente avec cuisine moderne
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mr-3"></div>
                  Terrasse de 100m² avec vue panoramique
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full mr-3"></div>
                  Parking souterrain de 50 places
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Espaces</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 bg-slate-200 dark:bg-slate-700 rounded-lg hover:shadow-xl dark:hover:shadow-slate-700/50 transform hover:scale-105 transition-all duration-500"
                style={{
                  backgroundImage: `url('/modern-office-building-with-glass-facade-and-clean.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'aménager vos bureaux ?</h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Créons ensemble un environnement de travail moderne qui inspire vos équipes et booste votre productivité.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transform hover:scale-105 transition-all duration-300"
            >
              Planifier une consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
