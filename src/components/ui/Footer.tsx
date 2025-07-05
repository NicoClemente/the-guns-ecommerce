// src/components/ui/Footer.tsx
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock, Shield, CreditCard, Truck, Star, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      {/* Trust Section - Exacto como Triestina */}
      <div className="bg-orange-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-4 rounded-full">
                <Truck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-black text-lg">ENVÍOS EFICIENTES</h3>
                <p className="text-sm text-orange-100">
                  Envío gratis a partir de $ 50.000. Armas de fuego y municiones solo con retiro en el local.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-4 rounded-full">
                <CreditCard className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-black text-lg">PAGOS SEGUROS</h3>
                <p className="text-sm text-orange-100">
                  Sitio Seguro con certificado SSL y tu dinero protegido por Mercadopago.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-4 rounded-full">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-black text-lg">SOPORTE</h3>
                <p className="text-sm text-orange-100">
                  Lunes a Viernes de 9:30 a 13hs y 14 a 18:30hs. Sábados de 9:30 a 13:30hs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Solo logo grande */}
          <div className="lg:col-span-1">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <Image
                  src="/images/LogoTheGuns.png"
                  alt="The Guns - Armería Especializada"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Hace más de 25 años que estamos en el rubro, con miles de compradores que te darán 
              las mejores referencias sobre nosotros.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-black text-orange-500">25+</div>
                <div className="text-xs text-gray-300 font-medium">Años de experiencia</div>
              </div>
              <div className="text-center bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-black text-orange-500">80+</div>
                <div className="text-xs text-gray-300 font-medium">Años en el rubro</div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <p className="text-white font-bold mb-4">SEGUINOS EN NUESTRAS REDES!</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-8 text-white text-xl border-b-2 border-orange-600 pb-2">ENLACES RÁPIDOS</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/categoria/caza-y-tiro" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Caza y tiro
                </Link>
              </li>
              <li>
                <Link href="/categoria/airsoft" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Airsoft
                </Link>
              </li>
              <li>
                <Link href="/categoria/cuchilleria" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Cuchillería
                </Link>
              </li>
              <li>
                <Link href="/categoria/optica" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Óptica
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-black mb-8 text-white text-xl border-b-2 border-orange-600 pb-2">ATENCIÓN AL CLIENTE</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/clu" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Información CLU
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Envíos y Retiros
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link href="/defensa-consumidor" className="hover:text-orange-500 transition-colors text-sm font-medium hover:pl-2 hover:border-l-2 hover:border-orange-500 py-1 block">
                  Defensa al Consumidor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Exacto como Triestina */}
          <div>
            <h4 className="font-black mb-8 text-white text-xl border-b-2 border-orange-600 pb-2">CONTACTO</h4>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Av. Nazca 2489</p>
                  <p className="text-sm text-gray-400">Bs. As. Argentina (1419)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">(54-11) 3974.1503</p>
                  <p className="text-sm text-gray-400">(54-11) 4501.6803</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <a href="mailto:ventas@theguns.com.ar" className="hover:text-orange-500 transition-colors font-bold text-white block">
                    ventas@theguns.com.ar
                  </a>
                  <a href="mailto:armeria@theguns.com.ar" className="hover:text-orange-500 transition-colors text-sm text-gray-400">
                    armeria@theguns.com.ar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Horarios de atención:</p>
                  <p className="text-sm">Lunes a Viernes de 9:30 a 13hs y 14 a 18:30hs</p>
                  <p className="text-sm">Sábados de 9:30 a 13:30hs</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/541139741503"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full justify-center"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Exacto como Triestina */}
      <div className="border-t border-gray-700 bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Políticas de privacidad – Términos y condiciones The Guns – Todos los derechos reservados
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © {currentYear} The Guns. www.theguns.com.ar
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/defensa-consumidor" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Defensa al Consumidor: Para consultas o denuncias ingrese aquí
              </Link>
            </div>
          </div>
          
          {/* Legal Notice - Exacto como Triestina */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-yellow-300 font-black text-lg mb-3">INFORMACIÓN IMPORTANTE</h4>
                  <div className="space-y-2 text-yellow-200 text-sm leading-relaxed">
                    <p>
                      <strong>Retiro en local obligatorio para pedidos de armas y municiones.</strong> 
                      Se requiere credencial de Legítimo Usuario vigente otorgada por ANMaC para completar la compra.
                    </p>
                    <p>
                      El requisito principal para la compra de un arma de fuego es tener la Credencial de Legítimo Usuario (CLU) vigente. 
                      En caso de que realices la compra de un arma de fuego por primera vez y no tengas la CLU, es posible tramitarla 
                      junto con la tarjeta de tenencia del arma a adquirir.
                    </p>
                    <p>
                      <strong>Nosotros te asesoramos en la organización de la documentación y en la gestión en ANMaC.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4 font-bold">MEDIOS DE PAGO ACEPTADOS</p>
              <div className="flex justify-center items-center space-x-6 opacity-60">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">VISA</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">MASTERCARD</div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">MERCADOPAGO</div>
                <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold">TRANSFERENCIA</div>
                <div className="bg-gray-600 text-white px-3 py-1 rounded text-xs font-bold">EFECTIVO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}