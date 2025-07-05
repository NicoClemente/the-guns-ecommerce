// src/components/ui/ProductFilters.tsx
'use client'

import { useState } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'

interface FilterOptions {
  priceRange: [number, number]
  brands: string[]
  inStock: boolean
  freeShipping: boolean
  requiresCLU: boolean | null
  rating: number
}

interface ProductFiltersProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  availableBrands: string[]
  isOpen: boolean
  onToggle: () => void
}

export function ProductFilters({
  filters,
  onFiltersChange,
  availableBrands,
  isOpen,
  onToggle
}: ProductFiltersProps) {
  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      priceRange: [0, 2000000],
      brands: [],
      inStock: false,
      freeShipping: false,
      requiresCLU: null,
      rating: 0
    })
  }

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
      >
        <SlidersHorizontal className="h-5 w-5" />
        <span>Filtros</span>
      </button>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filtros Avanzados</h3>
        <button
          onClick={onToggle}
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
              onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
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
            {availableBrands.map(brand => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => {
                    const newBrands = e.target.checked
                      ? [...filters.brands, brand]
                      : filters.brands.filter(b => b !== brand)
                    handleFilterChange('brands', newBrands)
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
                onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Solo en stock</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.freeShipping}
                onChange={(e) => handleFilterChange('freeShipping', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Envío gratis</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.requiresCLU === true}
                onChange={(e) => handleFilterChange('requiresCLU', e.target.checked ? true : null)}
                className="mr-2"
              />
              <span className="text-sm">Requiere CLU</span>
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
            onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
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
          onClick={clearAllFilters}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Limpiar todos los filtros
        </button>
      </div>
    </div>
  )
}