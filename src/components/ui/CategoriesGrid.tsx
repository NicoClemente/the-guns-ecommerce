// src/components/ui/CategoriesGrid.tsx
import Link from 'next/link'

const categories = [
  {
    id: 'armas-cortas',
    name: 'Armas Cortas',
    description: 'Pistolas y revólveres para defensa personal y tiro deportivo',
    icon: '🔫',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop',
    productCount: 156,
    href: '/categoria/armas-cortas',
    featured: true
  },
  {
    id: 'armas-largas',
    name: 'Armas Largas',
    description: 'Rifles, escopetas y carabinas para caza y tiro deportivo',
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    productCount: 89,
    href: '/categoria/armas-largas',
    featured: true
  },
  {
    id: 'municiones',
    name: 'Municiones',
    description: 'Cartuchos para todas las calibres y necesidades',
    icon: '💥',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop',
    productCount: 234,
    href: '/categoria/municiones',
    featured: true
  },
  {
    id: 'optica',
    name: 'Óptica',
    description: 'Miras telescópicas, puntos rojos y visores nocturnos',
    icon: '🔭',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    productCount: 67,
    href: '/categoria/optica',
    featured: true
  },
  {
    id: 'equipamiento',
    name: 'Equipamiento Táctico',
    description: 'Chalecos, cascos, mochilas y accesorios tácticos',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    productCount: 123,
    href: '/categoria/equipamiento',
    featured: false
  },
  {
    id: 'airsoft',
    name: 'Airsoft',
    description: 'Rifles y pistolas de airsoft, BBs y accesorios',
    icon: '🎪',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    productCount: 78,
    href: '/categoria/airsoft',
    featured: false
  },
  {
    id: 'cuchilleria',
    name: 'Cuchillería',
    description: 'Cuchillos tácticos, de supervivencia y colección',
    icon: '🗡️',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop',
    productCount: 45,
    href: '/categoria/cuchilleria',
    featured: false
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    description: 'Fundas, cargadores, soportes y complementos',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    productCount: 189,
    href: '/categoria/accesorios',
    featured: false
  }
]

export function CategoriesGrid() {
  const featuredCategories = categories.filter(cat => cat.featured)
  const otherCategories = categories.filter(cat => !cat.featured)

  return (
    <div className="space-y-8">
      {/* Featured Categories - Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-300 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-white/90 mb-3 line-clamp-2">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                  {category.productCount} productos
                </span>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Ver más →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Other Categories - Compact Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {otherCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="text-sm font-bold mb-1 group-hover:text-red-300 transition-colors">
                {category.name}
              </h3>
              <span className="text-xs text-white/80">
                {category.productCount} productos
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <Link
          href="/productos"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Ver Todos los Productos
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  )
}