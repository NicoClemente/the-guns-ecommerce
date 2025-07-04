// src/components/ui/FeaturedProducts.tsx
'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Eye, Heart, Truck, Shield, AlertTriangle, Tag } from 'lucide-react'
import Link from 'next/link'

const featuredProducts = [
  {
    id: '1',
    name: 'PISTOLA BERETTA 92FS 9MM PARABELLUM',
    category: 'Armas Cortas',
    brand: 'BERETTA',
    price: 1232500,
    originalPrice: 1375000,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 23,
    inStock: true,
    stockQuantity: 3,
    requiresCLU: true,
    freeShipping: true,
    isImported: true,
    featured: true,
    onSale: true,
    sku: 'BER-92FS-9MM',
    slug: 'pistola-beretta-92fs-9mm'
  },
  {
    id: '2',
    name: 'RIFLE AR-15 SMITH & WESSON M&P15 SPORT II',
    category: 'Armas Largas',
    brand: 'SMITH & WESSON',
    price: 1812500,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 18,
    inStock: true,
    stockQuantity: 2,
    requiresCLU: true,
    freeShipping: true,
    isImported: true,
    featured: true,
    onSale: false,
    sku: 'SW-MP15-223',
    slug: 'rifle-ar15-smith-wesson-mp15'
  },
  {
    id: '3',
    name: 'MIRA TELESCÓPICA LEUPOLD VX-3HD 3.5-10X40',
    category: 'Óptica',
    brand: 'LEUPOLD',
    price: 892500,
    originalPrice: 990000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    rating: 5,
    reviews: 31,
    inStock: true,
    stockQuantity: 5,
    requiresCLU: false,
    freeShipping: true,
    isImported: true,
    featured: true,
    onSale: true,
    sku: 'LEU-VX3HD-310',
    slug: 'mira-telescopica-leupold-vx3hd'
  },
  {
    id: '4',
    name: 'MUNICIÓN FEDERAL 9MM LUGER 115GR FMJ X50',
    category: 'Municiones',
    brand: 'FEDERAL',
    price: 45900,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop',
    rating: 4,
    reviews: 67,
    inStock: true,
    stockQuantity: 25,
    requiresCLU: true,
    freeShipping: false,
    isImported: true,
    featured: true,
    onSale: false,
    sku: 'FED-9MM-115-50',
    slug: 'municion-federal-9mm-115gr'
  },
  {
    id: '5',
    name: 'CHALECO TÁCTICO CONDOR MODULAR OPERATOR',
    category: 'Equipamiento',
    brand: 'CONDOR',
    price: 156750,
    originalPrice: 174000,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    rating: 4,
    reviews: 42,
    inStock: true,
    stockQuantity: 8,
    requiresCLU: false,
    freeShipping: true,
    isImported: true,
    featured: true,
    onSale: true,
    sku: 'CON-MOD-OPR-BK',
    slug: 'chaleco-tactico-condor-modular'
  },
  {
    id: '6',
    name: 'RIFLE AIRSOFT M4A1 FULL METAL CYMA',
    category: 'Airsoft',
    brand: 'CYMA',
    price: 287500,
    originalPrice: 320000,
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    rating: 4,
    reviews: 29,
    inStock: true,
    stockQuantity: 12,
    requiresCLU: false,
    freeShipping: true,
    isImported: false,
    featured: true,
    onSale: true,
    sku: 'CYM-M4A1-FM',
    slug: 'rifle-airsoft-m4a1-cyma'
  }
]

interface FeaturedProductsProps {
  onAddToCart: (product: any) => void
}

export function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [activeTab, setActiveTab] = useState('todos')

  const tabs = [
    { id: 'todos', label: 'Todos', count: featuredProducts.length },
    { id: 'ofertas', label: 'En Oferta', count: featuredProducts.filter(p => p.onSale).length },
    { id: 'nuevos', label: 'Nuevos Ingresos', count: featuredProducts.filter(p => p.featured).length },
    { id: 'populares', label: 'Más Populares', count: featuredProducts.filter(p => p.reviews > 30).length }
  ]

  const filteredProducts = featuredProducts.filter(product => {
    switch (activeTab) {
      case 'ofertas': return product.onSale
      case 'nuevos': return product.featured
      case 'populares': return product.reviews > 30
      default: return true
    }
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getDiscountPercentage = (current: number, original: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
            <span className="ml-2 text-sm opacity-75">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col space-y-1">
                {product.onSale && product.originalPrice && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    -{getDiscountPercentage(product.price, product.originalPrice)}%
                  </span>
                )}
                {product.isImported && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    Importado
                  </span>
                )}
                {product.freeShipping && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Envío Gratis
                  </span>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/producto/${product.slug}`}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                </Link>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              {/* Stock Badge */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold">
                    Sin Stock
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              {/* Category & Brand */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                {product.brand && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium">
                    {product.brand}
                  </span>
                )}
              </div>
              
              {/* Product Name */}
              <Link
                href={`/producto/${product.slug}`}
                className="block"
              >
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="mb-3">
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through block">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-lg font-bold text-red-600">
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Special Features */}
              <div className="flex flex-wrap gap-1 mb-3">
                {product.requiresCLU && (
                  <div className="flex items-center text-xs text-orange-600">
                    <Shield className="h-3 w-3 mr-1" />
                    <span>CLU</span>
                  </div>
                )}
                
                {product.freeShipping && (
                  <div className="flex items-center text-xs text-green-600">
                    <Truck className="h-3 w-3 mr-1" />
                    <span>Gratis</span>
                  </div>
                )}
                
                {product.stockQuantity < 5 && product.inStock && (
                  <div className="flex items-center text-xs text-red-600">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    <span>¡Últimas!</span>
                  </div>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  product.inStock
                    ? 'bg-red-600 text-white hover:bg-red-700 transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? (
                  <div className="flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Agregar</span>
                  </div>
                ) : (
                  'Sin stock'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="text-center">
        <Link
          href="/productos"
          className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Ver Todos los Productos
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  )
}