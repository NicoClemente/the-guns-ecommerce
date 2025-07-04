// src/types/index.ts
import { Decimal } from '@prisma/client/runtime/library'

// Tipos básicos del dominio
export interface Product {
  id: string
  name: string
  description?: string | null
  sku?: string | null
  
  // Precios
  basePriceUSD?: Decimal | number | null
  basePriceARS?: Decimal | number | null
  originalPriceUSD?: Decimal | number | null
  originalPriceARS?: Decimal | number | null
  
  // Metadata
  isImported: boolean
  inStock: boolean
  stockQuantity: number
  requiresCLU: boolean
  freeShipping: boolean
  featured: boolean
  onSale: boolean
  
  // Relaciones
  categoryId: string
  brandId?: string | null
  
  // Timestamps
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date | null
  
  // Campos calculados para la UI
  category?: string
  brand?: string
  image?: string
  images?: string[]
  rating?: number
  reviews?: number
  specifications?: Record<string, string>
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string | null
  icon?: string | null
  parentId?: string | null
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  count: number
}

export interface Brand {
  id: string
  name: string
  description?: string | null
  logoUrl?: string | null
  website?: string | null
  countryOfOrigin?: string | null
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  orderNumber: string
  status: string
  total: Decimal | number
  createdAt: Date
  updatedAt: Date
}

// Configuración de precios
export interface CurrencyRates {
  usdToArs: number
  lastUpdated: Date
  source?: string
}

export interface PriceConfig {
  currencyRates: CurrencyRates
  importedMarkup: number
  nationalMarkup: number
  minOrderFreeShipping: number
}

export interface ProductWithPrice extends Product {
  currentPrice: number
  originalPrice?: number
  discountPercentage?: number
}

// Estados y filtros
export type ProductStatus = 'draft' | 'published' | 'archived'
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'

export interface ProductFilters {
  categoryId?: string
  brandId?: string
  search?: string
  inStock?: boolean
  requiresCLU?: boolean
  freeShipping?: boolean
  featured?: boolean
  onSale?: boolean
  minPrice?: number
  maxPrice?: number
}

export interface PaginationParams {
  page: number
  limit: number
  sortField?: string
  sortDirection?: 'asc' | 'desc'
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}