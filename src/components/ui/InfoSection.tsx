// src/components/ui/InfoSection.tsx
import { Shield, Truck, CreditCard, Clock, MapPin, Phone, Users, Award } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: 'CLU Requerido',
    description: 'Credencial de Legítimo Usuario vigente necesaria para armas y municiones',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Truck,
    title: 'Envío Gratis',
    description: 'En compras superiores a $50.000. Armas y municiones solo retiro en local',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: CreditCard,
    title: 'Pago Seguro',
    description: 'Múltiples medios de pago. Transferencias, efectivo y MercadoPago',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Clock,
    title: 'Horarios Extendidos',
    description: 'Lun-Vie 9:30-18:30hs | Sáb 9:30-13:30hs. Atención personalizada',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

const stats = [
  {
    number: '25+',
    label: 'Años de Experiencia',
    description: 'Especialistas en armería'
  },
  {
    number: '2000+',
    label: 'Productos en Stock',
    description: 'Amplio catálogo disponible'
  },
  {
    number: '500+',
    label: 'Clientes Satisfechos',
    description: 'Cada mes confían en nosotros'
  },
  {
    number: '98%',
    label: 'Satisfacción',
    description: 'De nuestros clientes'
  }
]

export function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sobre <span className="text-red-600">The Guns</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Somos una armería especializada con más de 25 años de experiencia en el sector. 
                Nos dedicamos a la venta de armas de fuego, municiones, óptica y equipamiento táctico 
                para fuerzas de seguridad, deportistas y coleccionistas.
              </p>
              <p>
                Trabajamos exclusivamente con las mejores marcas internacionales como Beretta, 
                Smith & Wesson, Leupold, Eotech y Federal, garantizando productos de la más alta calidad.
              </p>
              <p>
                Cumplimos estrictamente con toda la normativa vigente y exigimos la Credencial de 
                Legítimo Usuario (CLU) para la venta de armas de fuego y municiones.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nosotros"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Conocé Más
              </Link>
              <Link
                href="/contacto"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contactanos
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
              alt="Armería The Guns"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Av. Nazca 2489, CABA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(54-11) 3974.1503</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Números que nos Respaldan
            </h2>
            <p className="text-lg text-gray-600">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">
                Información Legal Importante
              </h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                La venta de armas de fuego y municiones requiere la presentación de Credencial de 
                Legítimo Usuario (CLU) vigente otorgada por ANMaC. El retiro es obligatorio en nuestro 
                local comercial. No realizamos envíos de armas de fuego ni municiones. 
                <Link href="/clu" className="underline hover:no-underline font-medium">
                  Más información sobre CLU aquí.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}