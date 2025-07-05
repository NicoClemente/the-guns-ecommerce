// src/components/ui/HeroSlider.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=500&fit=crop',
    brand: 'BERSA',
    title: 'MODELOS EN STOCK',
    subtitle: 'Rendimiento en cada disparo',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/pistolas-nuevas',
    overlay: 'bg-black/50'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200&h=500&fit=crop',
    brand: 'GLOCK',
    title: 'NUEVOS INGRESOS',
    subtitle: 'La confiabilidad que necesitás',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/pistolas-nuevas',
    overlay: 'bg-black/50'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=1200&h=500&fit=crop',
    brand: 'FEDERAL',
    title: 'MUNICIONES',
    subtitle: 'Precisión en cada cartucho',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/municiones',
    overlay: 'bg-black/50'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop',
    brand: 'LEUPOLD',
    title: 'ÓPTICA PREMIUM',
    subtitle: 'Visión clara del objetivo',
    buttonText: 'Ver productos',
    buttonLink: '/categoria/optica',
    overlay: 'bg-black/50'
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPlaying(false)
  }

  return (
    <div className="relative h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              {/* Brand Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
                <span className="text-white font-bold text-lg tracking-wider">
                  {slide.brand}
                </span>
                <div className="text-xs text-white/80 mt-1">
                  You Can Trust
                </div>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-wide">
                {slide.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
                {slide.subtitle}
              </p>
              
              {/* CTA Button */}
              <Link
                href={slide.buttonLink}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wide"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30"
        onMouseEnter={() => setIsPlaying(false)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30"
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
                ? 'bg-orange-500 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}