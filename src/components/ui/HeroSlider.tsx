// src/components/ui/HeroSlider.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&h=600&fit=crop',
    brand: 'BERSA',
    title: 'MODELOS EN STOCK',
    subtitle: 'Rendimiento en cada disparo',
    description: 'Pistolas semiautomáticas de fabricación nacional con la calidad que necesitás',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/pistolas-nuevas',
    overlay: 'bg-gradient-to-r from-black/70 via-black/50 to-transparent',
    featured: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1400&h=600&fit=crop',
    brand: 'GLOCK',
    title: 'NUEVOS INGRESOS',
    subtitle: 'La confiabilidad que necesitás',
    description: 'Pistolas de alta gama para profesionales y deportistas exigentes',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/pistolas-nuevas',
    overlay: 'bg-gradient-to-r from-black/70 via-black/50 to-transparent',
    price: '25% OFF',
    featured: false
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=1400&h=600&fit=crop',
    brand: 'FEDERAL',
    title: 'MUNICIONES PREMIUM',
    subtitle: 'Precisión en cada cartucho',
    description: 'Cartuchos de alta calidad para tiro deportivo y defensa personal',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/municiones',
    overlay: 'bg-gradient-to-r from-black/70 via-black/50 to-transparent',
    featured: false
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&h=600&fit=crop',
    brand: 'LEUPOLD',
    title: 'ÓPTICA PROFESIONAL',
    subtitle: 'Visión clara del objetivo',
    description: 'Miras telescópicas y óptica de precisión para cazadores y tiradores',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/optica',
    overlay: 'bg-gradient-to-r from-black/70 via-black/50 to-transparent',
    featured: false
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1400&h=600&fit=crop',
    brand: 'OFERTAS',
    title: 'LIQUIDACIÓN',
    subtitle: 'Hasta 40% de descuento',
    description: 'Aprovechá las mejores ofertas en equipamiento táctico y accesorios',
    buttonText: 'Ver ofertas',
    buttonLink: '/ofertas',
    overlay: 'bg-gradient-to-r from-red-800/80 via-red-700/60 to-transparent',
    price: 'HASTA 40% OFF',
    featured: true
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 10000)
  }

  return (
    <div className="relative h-[650px] overflow-hidden bg-gray-900">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                {/* Brand Badge - Estilo Triestina */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-3 mb-8 border border-white/20 shadow-2xl">
                  <span className="text-white font-black text-xl tracking-wider">
                    {slide.brand}
                  </span>
                  {slide.price && (
                    <span className="ml-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {slide.price}
                    </span>
                  )}
                </div>
                
                {/* Main Content */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400 tracking-wide">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                  
                  {/* CTA Button - Estilo Triestina */}
                  <div className="pt-4">
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-lg text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-wider border-2 border-orange-500 hover:border-orange-400"
                    >
                      {slide.buttonText}
                      <span className="ml-3 text-2xl">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          {slide.featured && (
            <div className="absolute top-8 right-8 bg-red-600 text-white px-6 py-3 rounded-full font-black text-lg shadow-xl transform rotate-12 animate-pulse">
              ¡DESTACADO!
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows - Estilo Triestina */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 shadow-xl hover:scale-110"
        onMouseEnter={() => setIsPlaying(false)}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 shadow-xl hover:scale-110"
        onMouseEnter={() => setIsPlaying(false)}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Indicator - Estilo Triestina */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border-2 ${
              index === currentSlide 
                ? 'bg-orange-500 border-orange-400 w-12 h-4' 
                : 'bg-white/30 border-white/50 hover:bg-white/50 w-4 h-4'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 shadow-lg"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
        {(currentSlide + 1).toString().padStart(2, '0')} / {heroSlides.length.toString().padStart(2, '0')}
      </div>
    </div>
  )
}