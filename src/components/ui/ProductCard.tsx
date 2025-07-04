import { Star, ShoppingCart, Eye, Heart, Truck, Shield, AlertTriangle } from 'lucide-react'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  price: { current: number; original?: number }
  onAddToCart: (product: Product) => void
  onQuickView?: (product: Product) => void
}

export function ProductCard({ product, price, onAddToCart, onQuickView }: ProductCardProps) {
  const discountPercentage = price.original 
    ? Math.round((1 - price.current / price.original) * 100)
    : 0

  return (
    <div className="card group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              -{discountPercentage}%
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
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onQuickView?.(product)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold">
              Sin Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-500">{product.category}</span>
          {product.brand && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {product.brand}
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
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

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {price.original && (
              <span className="text-sm text-gray-500 line-through">
                ${price.original.toLocaleString()}
              </span>
            )}
            <span className="text-lg font-bold text-red-600">
              ${price.current.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Special Requirements */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.requiresCLU && (
            <div className="flex items-center text-xs text-orange-600">
              <Shield className="h-3 w-3 mr-1" />
              <span>Requiere CLU</span>
            </div>
          )}
          
          {product.freeShipping && (
            <div className="flex items-center text-xs text-green-600">
              <Truck className="h-3 w-3 mr-1" />
              <span>Envío gratis</span>
            </div>
          )}
          
          {product.stockQuantity < 10 && product.inStock && (
            <div className="flex items-center text-xs text-red-600">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span>Últimas unidades</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors text-sm ${
            product.inStock
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? (
            <div className="flex items-center justify-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Agregar al carrito</span>
            </div>
          ) : (
            'Sin stock'
          )}
        </button>
      </div>
    </div>
  )
}