// src/app/categoria/[slug]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/ui/ProductCard'
import { CartDrawer } from '@/components/ui/CartDrawer'
import { ChevronDown, Grid, List, SlidersHorizontal, Heart, Star, Filter } from 'lucide-react'

// Mock products data - Exacto como Triestina
const categoryProducts = [
  {
    id: '1',
    name: 'PISTOLA TAURUS 9MM G3C INO/MARRON/12T/2CA/EST',
    category: 'Pistolas Nuevas',
    brand: 'TAURUS',
    price: 771400,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 5,
    requiresCLU: true,
    freeShipping: false,
    isImported: false,
    slug: 'pistola-taurus-9mm-g3c-marron',
    featured: false,
    onSale: false,
    categoryId: 'pistolas-nuevas',
    caliber: '9mm',
    mechanism: 'semiautomatico',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'PISTOLA BERETTA 22LR NEOS 4.5″/10T/INO',
    category: 'Pistolas Nuevas', 
    brand: 'BERETTA',
    price: 1092500,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 3,
    requiresCLU: true,
    freeShipping: false,
    isImported: true,
    slug: 'pistola-beretta-22lr-neos',
    featured: false,
    onSale: false,
    categoryId: 'pistolas-nuevas',
    caliber: '.22 LR',
    mechanism: 'semiautomatico',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'PISTOLA SIG SAUER 9MM P365 XL BXR3 PAV/12T/CA/EST',
    category: 'Pistolas Nuevas',
    brand: 'SIG SAUER',
    price: 2138000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    inStock: true,
    stockQuantity: 2,
    requiresCLU: true,
    freeShipping: false,
    isImported: true,
    slug: 'pistola-sig-sauer-9mm-p365',
    featured: false,
    onSale: false,
    categoryId: 'pistolas-nuevas',
    caliber: '9mm',
    mechanism: 'semiautomatico',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // ... más productos aquí
]

// Estructura de categorías exacta como Triestina
const categoriesData = [
  {
    name: 'Airsoft',
    count: 200,
    expanded: false,
    subcategories: []
  },
  {
    name: 'Caza y Tiro',
    count: 991,
    expanded: true,
    subcategories: [
      { name: 'Accesorios', count: 331 },
      { name: 'Aire Comprimido y CO2', count: 223 },
      { 
        name: 'Armas Cortas', 
        count: 139, 
        expanded: true, 
        subcategories: [
          { name: 'Pistolas Nuevas', count: 127, active: true },
          { name: 'Pistolas Usadas', count: 8 },
          { name: 'Revólveres Nuevos', count: 4 }
        ]
      },
      { name: 'Armas Largas', count: 104 },
      { name: 'Arquería', count: 5 },
      { name: 'Defensa Personal', count: 34 },
      { name: 'Municiones', count: 172 },
      { name: 'Partes de Armas', count: 93 },
      { name: 'Recarga', count: 4 }
    ]
  },
  {
    name: 'Cuchillería',
    count: 125,
    expanded: false,
    subcategories: []
  },
  {
    name: 'Óptica',
    count: 67,
    expanded: false,
    subcategories: []
  },
  {
    name: 'Sin categoría',
    count: 8,
    expanded: false,
    subcategories: []
  }
]

// Filtros por calibre - Exacto como Triestina
const caliberFilters = [
  { name: '.22 LR', count: 54 },
  { name: '9mm', count: 42 },
  { name: '.380 ACP', count: 28 },
  { name: '.40 SW', count: 15 },
  { name: '.45 ACP', count: 12 },
  { name: '.357 Magnum', count: 8 },
  { name: '12/70', count: 35 },
  { name: '20/70', count: 12 }
]

// Filtros por mecanismo - Exacto como Triestina
const mechanismFilters = [
  { name: 'Semiautomático', count: 34 },
  { name: 'Revólver', count: 18 },
  { name: 'PCP', count: 2 },
  { name: 'Resorte', count: 45 },
  { name: 'CO2', count: 23 }
]

// Marcas - Exacto como Triestina
const brands = [
  { name: 'BERETTA', count: 4 },
  { name: 'BERSA', count: 60 },
  { name: 'BROWNING', count: 1 },
  { name: 'CANIK', count: 1 },
  { name: 'CZ', count: 1 },
  { name: 'GLOCK', count: 15 },
  { name: 'SIG SAUER', count: 8 },
  { name: 'TAURUS', count: 25 },
  { name: 'SMITH & WESSON', count: 12 }
]

export default function CategoriaPage() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [sortBy, setSortBy] = useState('menu_order')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([380700, 8502500])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCalibers, setSelectedCalibers] = useState<string[]>([])
  const [selectedMechanisms, setSelectedMechanisms] = useState<string[]>([])
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)
  const [showOnlyRequiresCLU, setShowOnlyRequiresCLU] = useState(false)

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

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        currentExchangeRate={1450}
      />

      {/* Hero Section with Breadcrumbs - Exacto como Triestina */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=400&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <nav className="text-white mb-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="/" className="hover:text-orange-400">Inicio</a></li>
              <li>/</li>
              <li><a href="/categoria/caza-y-tiro" className="hover:text-orange-400">Caza y Tiro</a></li>
              <li>/</li>
              <li><a href="/categoria/armas-cortas" className="hover:text-orange-400">Armas Cortas</a></li>
              <li>/</li>
              <li className="text-orange-400">Pistolas Nuevas</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Pistolas Nuevas
          </h1>
          <p className="text-white/90 mt-2">Todas las marcas, el mayor surtido en pistolas</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Exacto como Triestina */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Favorites Button - Exacto como Triestina */}
            <button className="w-full bg-white border border-gray-300 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors shadow-sm">
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Favoritos</span>
            </button>

            {/* Categories Filter - Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  Categorías
                  <ChevronDown className="h-5 w-5" />
                </h3>
              </div>
              <div className="p-4">
                {categoriesData.map((category, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-center justify-between py-2 cursor-pointer hover:text-orange-600 transition-colors">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <div className="ml-4 space-y-1">
                        {category.subcategories.map((sub, subIndex) => (
                          <div key={subIndex}>
                            <div className="flex items-center justify-between py-1 text-sm cursor-pointer hover:text-orange-600 transition-colors">
                              <span className="font-medium">{sub.name}</span>
                              <span className="text-gray-500">({sub.count})</span>
                            </div>
                            {sub.subcategories && (
                              <div className="ml-4">
                                {sub.subcategories.map((subsub, subsubIndex) => (
                                  <div key={subsubIndex} className={`flex items-center justify-between py-1 text-sm cursor-pointer transition-colors ${subsub.active ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}>
                                    <span>{subsub.name}</span>
                                    <span className="text-gray-500">({subsub.count})</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter - Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  Precio
                  <ChevronDown className="h-5 w-5" />
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="text"
                    value={`${priceRange[0].toLocaleString()}`}
                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                    readOnly
                  />
                  <span>-</span>
                  <input
                    type="text"
                    value={`${priceRange[1].toLocaleString()}`}
                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                    readOnly
                  />
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="380700"
                    max="8502500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((priceRange[1] - 380700) / (8502500 - 380700)) * 100}%, #e5e7eb ${((priceRange[1] - 380700) / (8502500 - 380700)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Caliber Filter - NUEVO: Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  Calibre
                  <ChevronDown className="h-5 w-5" />
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {caliberFilters.map((caliber, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedCalibers.includes(caliber.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCalibers([...selectedCalibers, caliber.name])
                        } else {
                          setSelectedCalibers(selectedCalibers.filter(c => c !== caliber.name))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm font-medium">{caliber.name}</span>
                    <span className="text-sm text-gray-500">({caliber.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mechanism Filter - NUEVO: Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  Mecanismo
                  <ChevronDown className="h-5 w-5" />
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {mechanismFilters.map((mechanism, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedMechanisms.includes(mechanism.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMechanisms([...selectedMechanisms, mechanism.name])
                        } else {
                          setSelectedMechanisms(selectedMechanisms.filter(m => m !== mechanism.name))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm font-medium">{mechanism.name}</span>
                    <span className="text-sm text-gray-500">({mechanism.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands Filter - Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg flex items-center justify-between">
                  Marcas
                  <ChevronDown className="h-5 w-5" />
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {brands.map((brand, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand.name])
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand.name))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm font-medium">{brand.name}</span>
                    <span className="text-sm text-gray-500">({brand.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Filters - NUEVO: Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                <h3 className="font-bold text-lg">Filtros</h3>
              </div>
              <div className="p-4 space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showOnlyInStock}
                    onChange={(e) => setShowOnlyInStock(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium">Solo productos en stock</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showOnlyRequiresCLU}
                    onChange={(e) => setShowOnlyRequiresCLU(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium">Solo armas (requiere CLU)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header - Exacto como Triestina */}
            <div className="bg-white rounded-lg border border-gray-300 p-4 mb-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Mostrando <strong>1–12</strong> de <strong>127</strong> resultados
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="menu_order">Ordenado por los últimos</option>
                    <option value="popularity">Ordenar por popularidad</option>
                    <option value="rating">Ordenar por calificación</option>
                    <option value="date">Ordenar por los últimos</option>
                    <option value="price">Ordenar por precio: menor a mayor</option>
                    <option value="price-desc">Ordenar por precio: mayor a menor</option>
                  </select>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-6'
              }
            `}>
              {categoryProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  price={{
                    current: product.price,
                    original: product.originalPrice
                  }}
                  onAddToCart={handleAddToCart}
                  viewMode={viewMode as 'grid' | 'list'}
                />
              ))}
            </div>

            {/* Pagination - Exacto como Triestina */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
                  « Anterior
                </button>
                <button className="px-3 py-2 bg-orange-600 text-white rounded-lg text-sm">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  11
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Siguiente »
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(productId, quantity) => {
          if (quantity <= 0) {
            setCartItems(prev => prev.filter(item => item.product.id !== productId))
            return
          }
          setCartItems(prev =>
            prev.map(item =>
              item.product.id === productId
                ? { ...item, quantity }
                : item
            )
          )
        }}
        onRemoveItem={(productId) => {
          setCartItems(prev => prev.filter(item => item.product.id !== productId))
        }}
        getProductPrice={(product) => ({
          current: product.price || 0,
          original: product.originalPrice
        })}
      />
    </div>
  )
}