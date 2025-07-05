// src/components/ui/Footer.tsx
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock, Shield, CreditCard, Truck } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-3 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-orange-500">THE</span>{" "}
                  <span className="text-white">GUNS</span>
                </h3>
                <p className="text-gray-400 text-sm">Armería especializada</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Más de 25 años especializados en la venta de armas de fuego, municiones, 
              óptica y equipamiento táctico. Cumplimiento estricto de normativas ANMaC.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-white hover:text-orange-500 transition-colors p-2 bg-orange-600 rounded-full hover:bg-orange-700"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-orange-500 transition-colors p-2 bg-orange-600 rounded-full hover:bg-orange-700"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-orange-500 transition-colors p-2 bg-orange-600 rounded-full hover:bg-orange-700"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/categoria/caza-y-tiro" className="hover:text-orange-500 transition-colors text-sm">
                  Caza y tiro
                </Link>
              </li>
              <li>
                <Link href="/categoria/airsoft" className="hover:text-orange-500 transition-colors text-sm">
                  Airsoft
                </Link>
              </li>
              <li>
                <Link href="/categoria/cuchilleria" className="hover:text-orange-500 transition-colors text-sm">
                  Cuchillería
                </Link>
              </li>
              <li>
                <Link href="/categoria/optica" className="hover:text-orange-500 transition-colors text-sm">
                  Óptica
                </Link>
              </li>
              <li>
                <Link href="/categoria/pesca-camping" className="hover:text-orange-500 transition-colors text-sm">
                  Pesca y Camping
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-orange-500 transition-colors text-sm">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-orange-500 transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Atención al Cliente</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/clu" className="hover:text-orange-500 transition-colors text-sm">
                  Información CLU
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-orange-500 transition-colors text-sm">
                  Envíos y Retiros
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-500 transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-orange-500 transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-orange-500 transition-colors text-sm">
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link href="/defensa-consumidor" className="hover:text-orange-500 transition-colors text-sm">
                  Defensa al Consumidor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Contacto</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Av. Nazca 2489</p>
                  <p className="text-sm text-gray-400">Buenos Aires, Argentina (1419)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <div>
                  <p>(54-11) 3974.1503</p>
                  <p className="text-sm text-gray-400">(54-11) 4501.6803</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:armeria@triestina.com.ar" className="hover:text-orange-500 transition-colors">
                  armeria@triestina.com.ar
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Lunes a Viernes de 9:30 a 13hs y 14 a 18:30hs</p>
                  <p className="text-sm">Sábados de 9:30 a 13:30hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Truck className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-bold text-white">Envíos Eficientes</p>
                <p className="text-sm text-gray-400">Envío gratis a partir de $ 50.000. Armas de fuego y municiones solo con retiro en el local.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300">
              <CreditCard className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-bold text-white">Pagos Seguros</p>
                <p className="text-sm text-gray-400">Sitio Seguro con certificado SSL y tu dinero protegido por Mercadopago.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-bold text-white">Estacionamiento Sin Cargo</p>
                <p className="text-sm text-gray-400">Una hora de estacionamiento sin costo en Av Nazca 2472</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} The Guns - Todos los derechos reservados
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🏆 25+ años de experiencia</span>
                <span>•</span>
                <span>🇦🇷 100% Argentina</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
              <p className="text-yellow-200 text-sm text-center leading-relaxed">
                <strong>Retiro en local obligatorio para pedidos de armas y municiones.</strong> Se requiere credencial de Legítimo Usuario vigente otorgada por ANMaC para completar la compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}