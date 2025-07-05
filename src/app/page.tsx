// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/Header'
import { HeroSlider } from '@/components/ui/HeroSlider'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/ui/ProductCard'
import { CartDrawer } from '@/components/ui/CartDrawer'
import { Heart, Star, MapPin, Phone } from 'lucide-react'

// Featured products similar to Triestina's "Nuestras Ofertas"
const featuredProducts = [
  {
    id: '1',
    name: 'PISTOLA TAURUS 9MM G3C INO/MARRON/12T/2CA/EST',
    category: 'Pistolas Nuevas',
    brand: 'TAURUS',
    price: 771400,
    originalPrice: 850000,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 5,
    requiresCLU: true,
    freeShipping: false,
    isImported: false,
    slug: 'pistola-taurus-9mm-g3c-marron',
    featured: true,
    onSale: true,
    categoryId: 'pistolas-nuevas',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'PISTOLA BERETTA 22LR NEOS 4.5″/10T/INO',
    category: 'Pistolas Nuevas',
    brand: 'BERETTA',
    price: 1092500,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 3,
    requiresCLU: true,
    freeShipping: false,
    isImported: true,
    slug: 'pistola-beretta-22lr-neos',
    featured: true,
    onSale: true,
    categoryId: 'pistolas-nuevas',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'RIFLE AR-15 SMITH & WESSON M&P15',
    category: 'Armas Largas',
    brand: 'SMITH & WESSON',
    price: 3250000,
    originalPrice: 3500000,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 2,
    requiresCLU: true,
    freeShipping: false,
    isImported: true,
    slug: 'rifle-ar15-smith-wesson',
    featured: true,
    onSale: true,
    categoryId: 'rifles',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'MIRA TELESCÓPICA LEUPOLD VX-3HD',
    category: 'Óptica',
    brand: 'LEUPOLD',
    price: 890000,
    originalPrice: 980000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 4,
    requiresCLU: false,
    freeShipping: false,
    isImported: true,
    slug: 'mira-telescopica-leupold',
    featured: true,
    onSale: true,
    categoryId: 'optica',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default function HomePage() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentExchangeRate] = useState(1450)

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        currentExchangeRate={currentExchangeRate}
      />

      <main>
        {/* Hero Slider */}
        <HeroSlider />

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-4 left-4 z-50">
          <a
            href="https://wa.me/541139741503"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>

        {/* Nuestras Ofertas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestras Ofertas
              </h2>
              <p className="text-lg text-gray-600">
                Aprovechá las mejores promociones en armamento y equipamiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="relative">
                  {/* Offer Badge */}
                  <div className="absolute top-2 left-2 z-10 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ¡Oferta!
                  </div>
                  
                  <ProductCard
                    product={product}
                    price={{
                      current: product.price,
                      original: product.originalPrice
                    }}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/ofertas"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-colors uppercase tracking-wide"
              >
                Ver todas las ofertas
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-gray-600">
                Encontrá todo lo que necesitás para tu actividad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Caza y Tiro', icon: '🎯', href: '/categoria/caza-y-tiro', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
                { name: 'Airsoft', icon: '🔫', href: '/categoria/airsoft', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop' },
                { name: 'Óptica', icon: '🔭', href: '/categoria/optica', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop' },
                { name: 'Cuchillería', icon: '🗡️', href: '/categoria/cuchilleria', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&h=200&fit=crop' },
                { name: 'Pesca y Camping', icon: '🎣', href: '/categoria/pesca-camping', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop' },
                { name: 'Ofertas', icon: '🏷️', href: '/ofertas', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' }
              ].map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-sm font-bold text-center px-2 group-hover:text-orange-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Envíos Eficientes</h3>
                <p className="text-orange-100">
                  Envío gratis a partir de $ 50.000. Armas de fuego y municiones solo con retiro en el local.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Pagos Seguros</h3>
                <p className="text-orange-100">
                  Sitio Seguro con certificado SSL y tu dinero protegido por Mercadopago.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Soporte</h3>
                <p className="text-orange-100">
                  Lunes a Viernes de 9:30 a 13hs y 14 a 18:30hs. Sábados de 9:30 a 13:30hs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Sobre <span className="text-orange-600">The Guns</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Somos una armería especializada con más de 25 años de experiencia en el sector. 
                    Nos dedicamos a la venta de armas de fuego, municiones, óptica y equipamiento táctico 
                    para fuerzas de seguridad, deportistas y coleccionistas.
                  </p>
                  <p>
                    Trabajamos exclusivamente con las mejores marcas internacionales como Beretta, 
                    Smith & Wesson, Leupold, Eotech y Federal, garantizando productos de la más alta calidad.
                  </p>
                  <p>
                    Cumplimos estrictamente con toda la normativa vigente y exigimos la Credencial de 
                    Legítimo Usuario (CLU) para la venta de armas de fuego y municiones.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/nosotros"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-colors uppercase"
                  >
                    Conocé Más
                  </a>
                  <a
                    href="/contacto"
                    className="border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 px-6 py-3 rounded-lg font-bold transition-colors uppercase"
                  >
                    Contactanos
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                  alt="Armería The Guns"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Av. Nazca 2489, CABA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>(54-11) 3974.1503</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        getProductPrice={(product) => ({
          current: product.price || 0,
          original: product.originalPrice
        })}
      />
    </div>
  )
}