// src/components/ui/CategoryFilter.tsx
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Category {
  id: string
  name: string
  slug: string
  icon?: string
  productCount: number
  subcategories?: Subcategory[]
}

interface Subcategory {
  id: string
  name: string
  slug: string
  count: number
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([selectedCategory])
  )

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Categorías</h3>
      
      <div className="space-y-1">
        <button
          onClick={() => onCategoryChange('')}
          className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
            selectedCategory === ''
              ? 'bg-red-100 text-red-700 font-semibold'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Todas las categorías
        </button>
        
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center">
              <button
                onClick={() => onCategoryChange(category.id)}
                className={`flex-1 flex items-center justify-between text-left py-2 px-3 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-100 text-red-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center">
                  {category.icon && <span className="mr-2">{category.icon}</span>}
                  {category.name}
                  <span className="ml-2 text-xs text-gray-500">({category.productCount})</span>
                </span>
              </button>
              
              {category.subcategories && category.subcategories.length > 0 && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  {expandedCategories.has(category.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            
            {expandedCategories.has(category.id) && category.subcategories && (
              <div className="ml-4 mt-2 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => onCategoryChange(subcategory.id)}
                    className="w-full text-left py-1 px-2 rounded text-sm transition-colors text-gray-600 hover:bg-gray-50"
                  >
                    {subcategory.name} ({subcategory.count})
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}