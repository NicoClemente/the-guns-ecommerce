// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/Header'
import { HeroSlider } from '@/components/ui/HeroSlider'
import { CategoriesGrid } from '@/components/ui/CategoriesGrid'
import { FeaturedProducts } from '@/components/ui/FeaturedProducts'
import { InfoSection } from '@/components/ui/InfoSection'
import { NewsletterSection } from '@/components/ui/NewsletterSection'
import { Footer } from '@/components/ui/Footer'
import { CartDrawer } from '@/components/ui/CartDrawer'

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

        {/* Categories Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encontrá todo lo que necesitás para tu actividad deportiva, profesional o de defensa personal
              </p>
            </div>
            <CategoriesGrid />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Productos Destacados
              </h2>
              <p className="text-lg text-gray-600">
                Selección especial de nuestros mejores productos
              </p>
            </div>
            <FeaturedProducts onAddToCart={handleAddToCart} />
          </div>
        </section>

        {/* Info Section */}
        <InfoSection />

        {/* Newsletter */}
        <NewsletterSection />
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