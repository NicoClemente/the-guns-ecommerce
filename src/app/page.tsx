'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/Header'
import { HeroSection } from '@/components/ui/HeroSection'
import { ProductCard } from '@/components/ui/ProductCard'
import { CategorySidebar } from '@/components/ui/CategorySidebar'
import { CartDrawer } from '@/components/ui/CartDrawer'
import { Footer } from '@/components/ui/Footer'
import { usePricesWithPrisma } from '@/hooks/usePricesWithPrisma'
import { Product, CartItem } from '@/types'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [sortBy, setSortBy] = useState('latest')

  const { priceConfig, calculateProductPrice, isLoading: priceLoading } = usePricesWithPrisma()

  // Cargar productos desde API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams({
          page: '1',
          limit: '20',
          ...(selectedCategory && { categoryId: selectedCategory }),
          sortField: sortBy === 'price-low' ? 'basePriceUSD' : 'createdAt',
          sortDirection: sortBy === 'price-low' ? 'asc' : 'desc'
        })

        const response = await fetch(`/api/products?${params}`)
        const data = await response.json()
        
        if (data.success) {
          setProducts(data.data)
        }
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory, sortBy])

  // Cargar categorías desde API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories?parentOnly=true')
        const data = await response.json()
        
        if (data.success) {
          setCategories(data.data)
        }
      } catch (error) {
        console.error('Error loading categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleAddToCart = (product: Product) => {
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

  const handleUpdateQuantity = (productId: string, quantity: number) => {
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

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Productos destacados (con descuento)
  const featuredProducts = products.filter(p => p.originalPriceUSD || p.originalPriceARS).slice(0, 8)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Cargando productos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        currentExchangeRate={priceConfig.currencyRates.usdToArs}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <HeroSection />
        </div>

        {/* Offers Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-red-600">Ofertas</span> Especiales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => {
              const productWithPrice = calculateProductPrice(product)
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  price={{
                    current: productWithPrice.currentPrice,
                    original: productWithPrice.originalPrice
                  }}
                  onAddToCart={handleAddToCart}
                />
              )
            })}
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="text-sm text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">Inicio</a>
            {selectedCategory && (
              <>
                <span className="mx-2">/</span>
                <a href="#" className="hover:text-red-600 transition-colors">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </a>
              </>
            )}
          </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={(categoryId) => {
                setSelectedCategory(selectedCategory === categoryId ? '' : categoryId)
                setSelectedSubcategory('')
              }}
              onSubcategoryChange={(subcategoryId) => {
                setSelectedSubcategory(selectedSubcategory === subcategoryId ? '' : subcategoryId)
              }}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedCategory 
                  ? categories.find(cat => cat.id === selectedCategory)?.name
                  : 'Todos los Productos'
                }
              </h1>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-gray-600">
                  {products.length} productos encontrados
                </span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  <option value="latest">Más recientes</option>
                  <option value="price-low">Precio: menor a mayor</option>
                  <option value="price-high">Precio: mayor a menor</option>
                </select>
              </div>
            </div>

            {/* Exchange Rate Info */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-800">
                    <strong>Tipo de cambio actual:</strong> USD ${priceConfig.currencyRates.usdToArs.toFixed(0)}
                  </p>
                  <p className="text-xs text-red-600">
                    Última actualización: {priceConfig.currencyRates.lastUpdated.toLocaleTimeString()}
                  </p>
                </div>
                <div className="text-xs text-red-600">
                  {priceLoading ? 'Actualizando...' : 'Precios automáticos'}
                </div>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron productos</p>
                <p className="text-gray-400 text-sm mt-2">
                  Prueba ajustando los filtros o busca otro término
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map(product => {
                  const productWithPrice = calculateProductPrice(product)
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      price={{
                        current: productWithPrice.currentPrice,
                        original: productWithPrice.originalPrice
                      }}
                      onAddToCart={handleAddToCart}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        getProductPrice={(product) => {
          const calc = calculateProductPrice(product)
          return { current: calc.currentPrice, original: calc.originalPrice }
        }}
      />

      <Footer />
    </div>
  )
}