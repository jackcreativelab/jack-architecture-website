"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Menu, Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 dark:text-white transform hover:scale-105 transition-transform duration-200">
            jack.architecture
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Projets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden hover:rotate-90 transition-transform duration-300">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out bg-hero-main"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/30 dark:bg-slate-900/60 transition-colors duration-500"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance animate-fade-in-up">
            Architecture
            <span className="block font-bold text-white bg-gradient-to-r from-white via-slate-100 to-slate-200 dark:from-slate-100 dark:via-white dark:to-slate-300 bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] supports-[not(background-clip:text)]:text-white">
              Contemporaine
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 dark:text-slate-300 text-pretty opacity-0 animate-fade-in-up animation-delay-300">
            Créer des espaces qui inspirent et transforment votre quotidien
          </p>
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl opacity-0 animate-fade-in-up animation-delay-600"
          >
            Découvrir nos projets
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 opacity-0 animate-fade-in-up intersection-observer transition-colors duration-500">
              Nos Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty opacity-0 animate-fade-in-up animation-delay-200 intersection-observer transition-colors duration-500">
              De la conception à la réalisation, nous vous accompagnons dans tous vos projets architecturaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up intersection-observer group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                <div className="w-6 h-6 bg-white dark:bg-slate-900 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">
                Conception Architecturale
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-pretty transition-colors duration-500">
                Plans détaillés, modélisation 3D et visualisations réalistes pour donner vie à vos idées.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-200 intersection-observer group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                <div className="w-6 h-6 bg-white dark:bg-slate-900 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">
                Rénovation & Extension
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-pretty transition-colors duration-500">
                Transformation et agrandissement de vos espaces existants avec une approche moderne.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-400 intersection-observer group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                <div className="w-6 h-6 bg-white dark:bg-slate-900 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">
                Suivi de Chantier
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-pretty transition-colors duration-500">
                Accompagnement complet durant la phase de construction pour garantir la qualité.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 opacity-0 animate-fade-in-up intersection-observer transition-colors duration-500">
              Projets Récents
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty opacity-0 animate-fade-in-up animation-delay-200 intersection-observer transition-colors duration-500">
              Découvrez quelques-unes de nos réalisations les plus emblématiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up intersection-observer group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="relative overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-project-villa"
                ></div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 dark:group-hover:bg-slate-900/40 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">
                  Villa Contemporaine
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-500">
                  Maison familiale de 250m² alliant modernité et confort
                </p>
                <Link href="/projects/villa-contemporaine">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-slate-100 dark:group-hover:text-slate-900 transition-all duration-300 bg-transparent border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  >
                    Voir le projet
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up animation-delay-200 intersection-observer group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="relative overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-project-bureaux"
                ></div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 dark:group-hover:bg-slate-900/40 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">
                  Bureaux Modernes
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-500">
                  Espace de travail innovant de 800m² en centre-ville
                </p>
                <Link href="/projects/bureaux-modernes">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-slate-100 dark:group-hover:text-slate-900 transition-all duration-300 bg-transparent border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  >
                    Voir le projet
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-up intersection-observer">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">
                Jack Architecte
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-pretty transition-colors duration-500">
                Avec plus de 15 ans d'expérience dans l'architecture contemporaine, je conçois des espaces qui allient
                esthétique, fonctionnalité et durabilité.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-pretty transition-colors duration-500">
                Chaque projet est une opportunité unique de créer quelque chose d'exceptionnel, en harmonie avec son
                environnement et les besoins de ses utilisateurs.
              </p>
              <Button className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg opacity-0 animate-fade-in-up animation-delay-300 intersection-observer transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 bg-about-architect"
            ></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-500"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in-up intersection-observer">
              Parlons de Votre Projet
            </h2>
            <p className="text-xl text-slate-300 dark:text-slate-400 max-w-2xl mx-auto text-pretty opacity-0 animate-fade-in-up animation-delay-200 intersection-observer transition-colors duration-500">
              Contactez-nous pour discuter de vos idées et donner vie à vos projets architecturaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center opacity-0 animate-fade-in-up intersection-observer group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/5 rounded-lg mb-4 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-slate-300 dark:text-slate-400 transition-colors duration-500">+33 1 23 45 67 89</p>
            </div>

            <div className="flex flex-col items-center opacity-0 animate-fade-in-up animation-delay-200 intersection-observer group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/5 rounded-lg mb-4 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-300 dark:text-slate-400 transition-colors duration-500">
                contact@jack.architecture
              </p>
            </div>

            <div className="flex flex-col items-center opacity-0 animate-fade-in-up animation-delay-400 intersection-observer group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/5 rounded-lg mb-4 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-slate-300 dark:text-slate-400 transition-colors duration-500">Paris, France</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl opacity-0 animate-fade-in-up animation-delay-600 intersection-observer"
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 dark:bg-black text-slate-400 dark:text-slate-500 transition-colors duration-500">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-white mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
              jack.architecture
            </div>
            <div className="text-sm">© 2024 Jack Architecture. Tous droits réservés.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
