// src/components/ui/ProductCard.tsx
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  price: { current: number; original?: number }
  onAddToCart: (product: Product) => void
  onQuickView?: (product: Product) => void
  viewMode?: 'grid' | 'list'
}

export function ProductCard({ product, price, onAddToCart, onQuickView, viewMode = 'grid' }: ProductCardProps) {
  const discountPercentage = price.original 
    ? Math.round((1 - price.current / price.original) * 100)
    : 0

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(amount)
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">
                ¡Oferta!
              </div>
            )}
            <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Heart className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-orange-600 font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
              </div>
              <div className="text-right">
                {price.original && (
                  <div className="text-sm text-gray-500 line-through mb-1">
                    {formatPrice(price.original)}
                  </div>
                )}
                <div className="text-2xl font-bold text-orange-600">
                  {formatPrice(price.current)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                Valorado con {product.rating || 0} de 5
              </span>
            </div>
            
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                product.inStock
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Añadir al carrito' : 'Sin stock'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {discountPercentage > 0 && (
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">
              ¡Oferta!
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="h-4 w-4 text-gray-400 hover:text-orange-600" />
        </button>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded font-bold">
              Sin Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-orange-600 font-semibold mb-2">
          {product.category}
        </p>
        
        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-sm leading-tight">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            Valorado con {product.rating || 0} de 5
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {price.original && (
            <div className="text-sm text-gray-500 line-through mb-1">
              {formatPrice(price.original)}
            </div>
          )}
          <div className="text-xl font-bold text-orange-600">
            {formatPrice(price.current)}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-lg font-bold transition-colors text-sm ${
            product.inStock
              ? 'bg-orange-600 hover:bg-orange-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Añadir al carrito' : 'Sin stock'}
        </button>
      </div>
    </div>
  )
}