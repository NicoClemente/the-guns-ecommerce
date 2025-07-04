import { Category } from '@/types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (categoryId: string) => void;
  onSubcategoryChange: (subcategoryId: string) => void;
}

export function CategorySidebar({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange
}: CategorySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([selectedCategory])
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
    onCategoryChange(categoryId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Categorías</h3>
      
      <div className="space-y-1">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => toggleCategory(category.id)}
              className={`w-full flex items-center justify-between text-left py-2 px-3 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-100 text-red-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center">
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </span>
              {expandedCategories.has(category.id) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {expandedCategories.has(category.id) && (
              <div className="ml-4 mt-2 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => onSubcategoryChange(subcategory.id)}
                    className={`w-full text-left py-1 px-2 rounded text-sm transition-colors ${
                      selectedSubcategory === subcategory.id
                        ? 'bg-red-50 text-red-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {subcategory.name} ({subcategory.count})
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Price Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3">Filtros de Precio</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Hasta $50.000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">$50.000 - $100.000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">$100.000 - $200.000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Más de $200.000</span>
          </label>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3">Marcas</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">BERETTA</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">SMITH & WESSON</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">EOTECH</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">FEDERAL</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">STREAMLIGHT</span>
          </label>
        </div>
      </div>

      {/* Special Features */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3">Características</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Envío gratis</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Requiere CLU</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Productos importados</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">En oferta</span>
          </label>
        </div>
      </div>
    </div>
  );
}