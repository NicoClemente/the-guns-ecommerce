import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=500&fit=crop',
    title: 'Armería The Guns',
    subtitle: 'Equipamiento táctico y deportivo de primera calidad',
    cta: 'Ver Catálogo',
    overlay: 'bg-black bg-opacity-50'
  },
  {
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200&h=500&fit=crop',
    title: 'Nuevos Ingresos en Airsoft',
    subtitle: 'Descubre las últimas marcadoras y accesorios',
    cta: 'Ver Productos',
    overlay: 'bg-red-900 bg-opacity-40'
  },
  {
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop',
    title: 'Accesorios Tácticos',
    subtitle: 'Todo lo que necesitas para tu actividad profesional',
    cta: 'Explorar',
    overlay: 'bg-gray-900 bg-opacity-50'
  },
  {
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=500&fit=crop',
    title: 'Promociones Especiales',
    subtitle: 'Hasta 30% de descuento en productos seleccionados',
    cta: 'Ver Ofertas',
    overlay: 'bg-red-800 bg-opacity-40'
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-96 md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay} flex items-center justify-center`}>
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-3xl mb-8 font-light">
                {slide.subtitle}
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}