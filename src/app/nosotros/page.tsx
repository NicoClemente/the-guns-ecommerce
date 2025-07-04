// src/app/nosotros/page.tsx
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { Shield, Award, Users, MapPin, Clock, Phone, Mail, Target, CheckCircle } from 'lucide-react'

export default function NosotrosPage() {
  const valores = [
    {
      icon: Shield,
      title: 'Seguridad y Legalidad',
      description: 'Cumplimiento estricto de todas las normativas ANMaC y legislación vigente'
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Solo trabajamos con las mejores marcas internacionales del mercado'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Asesoramiento especializado para cada cliente y necesidad específica'
    },
    {
      icon: Target,
      title: 'Experiencia Comprobada',
      description: 'Más de 25 años especializados en el sector armero y táctico'
    }
  ]

  const timeline = [
    {
      year: '1998',
      title: 'Fundación',
      description: 'Inicios como pequeña armería especializada en Buenos Aires'
    },
    {
      year: '2005',
      title: 'Expansión',
      description: 'Ampliación del local y diversificación hacia equipamiento táctico'
    },
    {
      year: '2012',
      title: 'Especialización',
      description: 'Certificación como distribuidor autorizado de marcas premium'
    },
    {
      year: '2018',
      title: 'Modernización',
      description: 'Implementación de sistemas digitales y mejora de procesos'
    },
    {
      year: '2023',
      title: 'Presente',
      description: 'Líder regional en venta de armamento y equipamiento especializado'
    }
  ]

  const certificaciones = [
    'Distribuidor Autorizado ANMaC',
    'Certificación ISO 9001',
    'Habilitación Municipal CABA',
    'Registro Nacional de Armas'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={0}
        onCartClick={() => {}}
        currentExchangeRate={1450}
      />

      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop"
            alt="The Guns - Armería"
            className="w-full h-full object-cover"
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Sobre <span className="text-red-500">The Guns</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                Más de 25 años especializados en armería, 
                equipamiento táctico y defensa personal
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-red-600">Inicio</a></li>
              <li>/</li>
              <li className="text-gray-800">Nosotros</li>
            </ol>
          </nav>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>The Guns</strong> nació en 1998 con la visión de brindar productos 
                  de la más alta calidad para profesionales de la seguridad, deportistas 
                  y coleccionistas de armas de fuego.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos especializado en la importación y venta 
                  de armamento de las mejores marcas internacionales como Beretta, Smith & Wesson, 
                  Leupold, Eotech y Federal Premium, entre otras.
                </p>
                <p>
                  Nuestra experiencia de más de dos décadas nos ha permitido construir 
                  relaciones sólidas con fabricantes y desarrollar un profundo conocimiento 
                  del mercado argentino.
                </p>
                <p>
                  Cumplimos estrictamente con toda la normativa vigente de ANMaC y 
                  exigimos la Credencial de Legítimo Usuario para todas las ventas 
                  de armas de fuego y municiones.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                alt="Interior de The Guns"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo diario y nuestra relación con los clientes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestra Trayectoria
              </h2>
              <p className="text-lg text-gray-600">
                Un recorrido de crecimiento constante y especialización
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8">
                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-2xl font-bold text-red-600 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                    
                    <div className="w-1/2 pl-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Certificaciones y Habilitaciones
              </h2>
              <p className="text-lg text-gray-600">
                Cumplimiento total de la normativa vigente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificaciones.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-red-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tenés alguna consulta?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Nuestro equipo está listo para asesorarte
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contactanos
              </a>
              <a
                href="tel:+541139741503"
                className="border border-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}