import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-red-600 to-black p-2 rounded-lg mr-3">
                <span className="text-white font-bold text-lg">TG</span>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-red-500">The</span>{" "}
                <span className="text-white">Guns</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Armería especializada en equipamiento táctico, deportivo y de defensa personal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Av. Nazca 2489, Bs. As. Argentina (1419)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>(54-11) 3974.1503 / 4501.6803</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>ventas@theguns.com.ar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-red-500" />
                <span>Lun-Vie 9:30-18:30hs | Sáb 9:30-13:30hs</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Quienes Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Defensa al Consumidor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credencial CLU</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Categorías</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Armas Cortas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Armas Largas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Municiones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Airsoft</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accesorios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Óptica</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 The Guns - Todos los derechos reservados
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🔒 Sitio Seguro SSL</span>
                <span>•</span>
                <span>💳 MercadoPago</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              ⚠️ Retiro en local obligatorio para pedidos de armas y municiones. 
              Se requiere Credencial de Legítimo Usuario (CLU) vigente otorgada por ANMaC para completar la compra.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}