// src/components/ui/Footer.tsx
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Shield, CreditCard, Truck } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-red-600 to-black p-3 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-red-500">The</span>{" "}
                  <span className="text-white">Guns</span>
                </h3>
                <p className="text-gray-400 text-sm">Armería especializada</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Más de 25 años especializados en la venta de armas de fuego, municiones, 
              óptica y equipamiento táctico. Cumplimiento estricto de normativas ANMaC.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-red-500 text-lg">Contacto</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Av. Nazca 2489</p>
                  <p className="text-sm text-gray-400">Buenos Aires, Argentina (1419)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <div>
                  <p>(54-11) 3974.1503</p>
                  <p className="text-sm text-gray-400">(54-11) 4501.6803</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a href="mailto:ventas@theguns.com.ar" className="hover:text-white transition-colors">
                  ventas@theguns.com.ar
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Lun-Vie: 9:30-18:30hs</p>
                  <p className="text-sm">Sáb: 9:30-13:30hs</p>
                  <p className="text-sm text-gray-400">Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-red-500 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors text-sm">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/clu" className="hover:text-white transition-colors text-sm">
                  Información CLU
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-white transition-colors text-sm">
                  Envíos y Retiros
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/defensa-consumidor" className="hover:text-white transition-colors text-sm">
                  Defensa al Consumidor
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-6 text-red-500 text-lg">Categorías</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/categoria/armas-cortas" className="hover:text-white transition-colors text-sm">
                  Armas Cortas
                </Link>
              </li>
              <li>
                <Link href="/categoria/armas-largas" className="hover:text-white transition-colors text-sm">
                  Armas Largas
                </Link>
              </li>
              <li>
                <Link href="/categoria/municiones" className="hover:text-white transition-colors text-sm">
                  Municiones
                </Link>
              </li>
              <li>
                <Link href="/categoria/optica" className="hover:text-white transition-colors text-sm">
                  Óptica
                </Link>
              </li>
              <li>
                <Link href="/categoria/equipamiento" className="hover:text-white transition-colors text-sm">
                  Equipamiento Táctico
                </Link>
              </li>
              <li>
                <Link href="/categoria/airsoft" className="hover:text-white transition-colors text-sm">
                  Airsoft
                </Link>
              </li>
              <li>
                <Link href="/categoria/cuchilleria" className="hover:text-white transition-colors text-sm">
                  Cuchillería
                </Link>
              </li>
              <li>
                <Link href="/categoria/accesorios" className="hover:text-white transition-colors text-sm">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-gray-300">
              <Shield className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-medium">Sitio Seguro SSL</p>
                <p className="text-sm text-gray-400">Protección de datos garantizada</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300">
              <CreditCard className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium">Múltiples Medios de Pago</p>
                <p className="text-sm text-gray-400">Transferencias, efectivo, MercadoPago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300">
              <Truck className="h-6 w-6 text-purple-500" />
              <div>
                <p className="font-medium">Envío Gratis +$50.000</p>
                <p className="text-sm text-gray-400">Armas y municiones: solo retiro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} The Guns - Todos los derechos reservados
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desarrollado con ❤️ para la comunidad de tiro deportivo
              </p>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🏆 25+ años de experiencia</span>
                <span>•</span>
                <span>🇦🇷 100% Argentina</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
              <p className="text-yellow-200 text-sm text-center leading-relaxed">
                ⚠️ <strong>AVISO LEGAL:</strong> La venta de armas de fuego y municiones requiere la presentación 
                de Credencial de Legítimo Usuario (CLU) vigente otorgada por ANMaC. El retiro es 
                <strong> obligatorio en nuestro local comercial</strong>. No realizamos envíos de armas de fuego ni municiones. 
                Cumplimos estrictamente con la normativa vigente de la República Argentina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}