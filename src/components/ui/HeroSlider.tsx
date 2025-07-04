// src/components/ui/HeroSlider.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    title: 'Equipamiento Profesional',
    subtitle: 'Para fuerzas de seguridad y defensa personal',
    description: 'Amplio stock de armas de fuego, municiones y equipamiento táctico de las mejores marcas internacionales',
    buttonText: 'Ver Catálogo',
    buttonLink: '/productos',
    textPosition: 'left',
    overlay: 'bg-black/40'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200&h=600&fit=crop',
    title: 'Nuevos Ingresos',
    subtitle: 'Pistolas Beretta y Smith & Wesson',
    description: 'Recibimos nuevos modelos de las marcas más reconocidas del mercado. Consultá disponibilidad y precios.',
    buttonText: 'Ver Productos',
    buttonLink: '/categoria/armas-cortas',
    textPosition: 'right',
    overlay: 'bg-gray-900/50'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=600&fit=crop',
    title: 'Óptica de Precisión',
    subtitle: 'Miras telescópicas y puntos rojos',
    description: 'La mejor selección de óptica para tiro deportivo y caza. Marcas Leupold, Eotech, Aimpoint y más.',
    buttonText: 'Ver Óptica',
    buttonLink: '/categoria/optica',
    textPosition: 'center',
    overlay: 'bg-blue-900/40'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
    title: 'Promociones Especiales',
    subtitle: 'Hasta 30% de descuento',
    description: 'Aprovechá nuestras ofertas en productos seleccionados. Válido hasta agotar stock.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/ofertas',
    textPosition: 'left',
    overlay: 'bg-red-900/50'
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
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsPlaying(false)
  }

  const getTextAlignment = (position) => {
    switch (position) {
      case 'left': return 'text-left items-start'
      case 'right': return 'text-right items-end'
      case 'center': return 'text-center items-center'
      default: return 'text-left items-start'
    }
  }

  return (
    <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
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
              <div className={`flex flex-col max-w-2xl ${getTextAlignment(slide.textPosition)} ${
                slide.textPosition === 'right' ? 'ml-auto' : 
                slide.textPosition === 'center' ? 'mx-auto' : ''
              }`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 font-light">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        onMouseEnter={() => setIsPlaying(false)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        onMouseEnter={() => setIsPlaying(false)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        />
      </div>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        {isPlaying ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zM14 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 000 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586 6.707 7.293a1 1 0 00-1.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Mobile Optimizations */}
      <div className="absolute inset-x-0 bottom-16 flex justify-center md:hidden">
        <div className="bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
          <span className="text-white text-sm">
            {currentSlide + 1} / {heroSlides.length}
          </span>
        </div>
      </div>
    </div>
  )
}