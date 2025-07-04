// src/app/productos/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/ui/ProductCard'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { ProductFilters } from '@/components/ui/ProductFilters'
import { CartDrawer } from '@/components/ui/CartDrawer'
import { Search, Grid, List, SlidersHorizontal, X } from 'lucide-react'

// Mock products data
const allProducts = [
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
    slug: 'mira-telescopica-leupold-vx3hd'
  },
  // ... más productos
]

export default function ProductosPage() {
  const [products, setProducts] = useState(allProducts)
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 2000000],
    brands: [],
    inStock: false,
    freeShipping: false,
    requiresCLU: null,
    rating: 0
  })

  // Filter and search logic
  useEffect(() => {
    let filtered = [...products]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product =>
        filters.brands.includes(product.brand)
      )
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock)
    }

    // Free shipping filter
    if (filters.freeShipping) {
      filtered = filtered.filter(product => product.freeShipping)
    }

    // CLU filter
    if (filters.requiresCLU !== null) {
      filtered = filtered.filter(product => product.requiresCLU === filters.requiresCLU)
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchQuery, selectedCategory, filters, sortBy])

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

  const categories = [...new Set(products.map(p => p.category))]
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        currentExchangeRate={1450}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-red-600">Inicio</a></li>
            <li>/</li>
            <li className="text-gray-800">Productos</li>
            {selectedCategory && (
              <>
                <li>/</li>
                <li className="text-gray-800">{selectedCategory}</li>
              </>
            )}
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {selectedCategory || 'Todos los Productos'}
          </h1>
          <p className="text-lg text-gray-600">
            Encontrá el equipamiento perfecto para tus necesidades
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="name">Ordenar por nombre</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="rating">Mejor valorados</option>
            </select>

            {/* View Mode & Filters */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5" />
                <span>Filtros</span>
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Mostrando {filteredProducts.length} de {products.length} productos
              {searchQuery && ` para "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Filtros Avanzados</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rango de Precio
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="2000000"
                    step="10000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [0, parseInt(e.target.value)]
                    }))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marcas
                </label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={(e) => {
                          setFilters(prev => ({
                            ...prev,
                            brands: e.target.checked
                              ? [...prev.brands, brand]
                              : prev.brands.filter(b => b !== brand)
                          }))
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Características
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        inStock: e.target.checked
                      }))}
                      className="mr-2"
                    />
                    <span className="text-sm">Solo en stock</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.freeShipping}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        freeShipping: e.target.checked
                      }))}
                      className="mr-2"
                    />
                    <span className="text-sm">Envío gratis</span>
                  </label>
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valoración mínima
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    rating: parseInt(e.target.value)
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="0">Todas</option>
                  <option value="4">4+ estrellas</option>
                  <option value="5">5 estrellas</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => setFilters({
                  priceRange: [0, 2000000],
                  brands: [],
                  inStock: false,
                  freeShipping: false,
                  requiresCLU: null,
                  rating: 0
                })}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Limpiar todos los filtros
              </button>
            </div>
          </div>
        )}

        {/* Products Grid/List */}
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6' 
            : 'space-y-4'
          }
        `}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                price={{
                  current: product.price,
                  original: product.originalPrice
                }}
                onAddToCart={handleAddToCart}
                viewMode={viewMode}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-500 mb-6">
                Intentá ajustar los filtros o buscar con otros términos
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('')
                  setFilters({
                    priceRange: [0, 2000000],
                    brands: [],
                    inStock: false,
                    freeShipping: false,
                    requiresCLU: null,
                    rating: 0
                  })
                }}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredProducts.length > 20 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                Anterior
              </button>
              <span className="px-4 py-2 bg-red-600 text-white rounded-lg">1</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Siguiente
              </button>
            </div>
          </div>
        )}
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