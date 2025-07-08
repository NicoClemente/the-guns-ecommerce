// src/components/ui/Header.tsx - Estilo La Triestina
'use client'

import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Mail, MapPin, Clock, ChevronDown, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentExchangeRate: number;
}

export function Header({ cartItemsCount, onCartClick, currentExchangeRate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'CAZA Y TIRO',
      href: '/categoria/caza-y-tiro',
      submenu: [
        {
          category: 'Armas cortas',
          items: [
            { name: 'Pistolas Nuevas', href: '/categoria/caza-y-tiro/armas-cortas/pistolas' },
            { name: 'Pistolas Usadas', href: '/categoria/caza-y-tiro/armas-cortas/pistolas-usadas' },
            { name: 'Revólveres Nuevos', href: '/categoria/caza-y-tiro/armas-cortas/revolveres' },
            { name: 'Revólveres Usados', href: '/categoria/caza-y-tiro/armas-cortas/revolveres-usados' }
          ]
        },
        {
          category: 'Armas Largas',
          items: [
            { name: 'Fusiles y Carabinas Nuevas', href: '/categoria/caza-y-tiro/armas-largas/fusiles-y-carabinas' },
            { name: 'Fusiles Usados', href: '/categoria/caza-y-tiro/armas-largas/fusiles-usados' },
            { name: 'Escopetas Nuevas', href: '/categoria/caza-y-tiro/armas-largas/escopetas' },
            { name: 'Escopetas Usadas', href: '/categoria/caza-y-tiro/armas-largas/escopetas-usadas' },
            { name: 'Carabinas Usadas', href: '/categoria/caza-y-tiro/armas-largas/carabinas-usadas' }
          ]
        },
        {
          category: 'Aire comprimido y CO2',
          items: [
            { name: 'Armas Largas Aire y Co2', href: '/categoria/caza-y-tiro/aire-comprimido-y-co2/armas-largas-aire-y-co2' },
            { name: 'Pistolas Aire y Co2', href: '/categoria/caza-y-tiro/aire-comprimido-y-co2/pistolas-aire-y-co2' },
            { name: 'Insumos Aire y Co2', href: '/categoria/caza-y-tiro/aire-comprimido-y-co2/insumos-aire-y-co2' },
            { name: 'Balines', href: '/categoria/caza-y-tiro/aire-comprimido-y-co2/balines' },
            { name: 'Cargadores', href: '/categoria/caza-y-tiro/aire-comprimido-y-co2/cargadores' }
          ]
        },
        {
          category: 'Municiones',
          items: [
            { name: 'Balas', href: '/categoria/caza-y-tiro/municiones/balas' },
            { name: 'Cartuchos', href: '/categoria/caza-y-tiro/municiones/cartuchos' }
          ]
        },
        {
          category: 'Accesorios',
          items: [
            { name: 'Partes de Armas', href: '/categoria/caza-y-tiro/accesorios/partes-de-armas' },
            { name: 'Limpieza y Mantenimiento', href: '/categoria/caza-y-tiro/equipamiento/limpieza-y-mantenimiento' },
            { name: 'Equipamiento', href: '/categoria/caza-y-tiro/equipamiento' }
          ]
        },
        {
          category: 'Defensa Personal',
          items: [
            { name: 'Gas Pimienta', href: '/categoria/caza-y-tiro/defensa-personal/gas-pimienta' },
            { name: 'Consumibles', href: '/categoria/caza-y-tiro/defensa-personal/consumibles' },
            { name: 'Lanzadoras', href: '/categoria/caza-y-tiro/defensa-personal/lanzadoras' },
            { name: 'Varios', href: '/categoria/caza-y-tiro/defensa-personal/varios' }
          ]
        },
        {
          category: 'Arquería',
          items: [
            { name: 'Arcos', href: '/categoria/caza-y-tiro/arqueria/arcos' },
            { name: 'Flechas', href: '/categoria/caza-y-tiro/arqueria/flechas' },
            { name: 'Accesorios', href: '/categoria/caza-y-tiro/arqueria/accesorios' }
          ]
        },
        {
          category: 'Recarga',
          items: [
            { name: 'Máquinas de Recarga', href: '/categoria/caza-y-tiro/recarga/maquinas-de-recarga' },
            { name: 'Componentes', href: '/categoria/caza-y-tiro/recarga/componentes' },
            { name: 'Herramientas', href: '/categoria/caza-y-tiro/recarga/herramientas' }
          ]
        }
      ]
    },
    {
      label: 'AIRSOFT',
      href: '/categoria/airsoft',
      submenu: [
        {
          category: 'Marcadoras Airsoft',
          items: [
            { name: 'Rifles Eléctricos AEG', href: '/categoria/airsoft/marcadoras_airsoft/rifles-electricos' },
            { name: 'Pistolas GBB', href: '/categoria/airsoft/marcadoras_airsoft/pistolas-gbb' },
            { name: 'Rifles de Resorte', href: '/categoria/airsoft/marcadoras_airsoft/rifles-resorte' },
            { name: 'Pistolas Corredera Fija', href: '/categoria/airsoft/marcadoras_airsoft/pist_airs_corrfija' },
            { name: 'Escopetas Airsoft', href: '/categoria/airsoft/marcadoras_airsoft/escopetas' }
          ]
        },
        {
          category: 'Munición Airsoft',
          items: [
            { name: 'BBs 6mm 0.20g', href: '/categoria/airsoft/bbs-airsoft-6mm/020g' },
            { name: 'BBs 6mm 0.25g', href: '/categoria/airsoft/bbs-airsoft-6mm/025g' },
            { name: 'BBs 6mm 0.28g', href: '/categoria/airsoft/bbs-airsoft-6mm/028g' },
            { name: 'BBs Biodegradables', href: '/categoria/airsoft/bbs-airsoft-6mm/biodegradables' }
          ]
        },
        {
          category: 'Accesorios Airsoft',
          items: [
            { name: 'Cargadores', href: '/categoria/airsoft/accesorios/cargadores' },
            { name: 'Baterías', href: '/categoria/airsoft/accesorios/baterias' },
            { name: 'Upgrades', href: '/categoria/airsoft/accesorios/upgrades' },
            { name: 'Repuestos', href: '/categoria/airsoft/accesorios/repuestos' }
          ]
        },
        {
          category: 'Equipamiento Táctico',
          items: [
            { name: 'Chalecos', href: '/categoria/airsoft/equipamiento/chalecos' },
            { name: 'Máscaras', href: '/categoria/airsoft/equipamiento/mascaras' },
            { name: 'Guantes', href: '/categoria/airsoft/equipamiento/guantes' }
          ]
        }
      ]
    },
    {
      label: 'ÓPTICA',
      href: '/categoria/optica',
      submenu: [
        {
          category: 'Miras',
          items: [
            { name: 'Miras Telescópicas', href: '/categoria/optica/miras-telescopicas' },
            { name: 'Puntos Rojos', href: '/categoria/optica/puntos-rojos' },
            { name: 'Miras Holográficas', href: '/categoria/optica/miras-holograficas' },
            { name: 'Visores Nocturnos', href: '/categoria/optica/visores-nocturnos' }
          ]
        },
        {
          category: 'Accesorios Ópticos',
          items: [
            { name: 'Monturas', href: '/categoria/optica/accesorios/monturas' },
            { name: 'Binoculares', href: '/categoria/optica/accesorios/binoculares' },
            { name: 'Rangefinders', href: '/categoria/optica/accesorios/rangefinders' },
            { name: 'Linternas', href: '/categoria/optica/accesorios/linternas' }
          ]
        }
      ]
    },
    {
      label: 'CUCHILLERÍA',
      href: '/categoria/cuchilleria',
      submenu: [
        {
          category: 'Cuchillos',
          items: [
            { name: 'Cuchillos Tácticos', href: '/categoria/cuchilleria/cuchillos-tacticos' },
            { name: 'Cuchillos de Caza', href: '/categoria/cuchilleria/cuchillos-caza' },
            { name: 'Cuchillos de Supervivencia', href: '/categoria/cuchilleria/cuchillos-supervivencia' },
            { name: 'Multitools', href: '/categoria/cuchilleria/multitools' },
            { name: 'Navajas', href: '/categoria/cuchilleria/navajas' }
          ]
        },
        {
          category: 'Herramientas',
          items: [
            { name: 'Hachas', href: '/categoria/cuchilleria/herramientas/hachas' },
            { name: 'Machetes', href: '/categoria/cuchilleria/herramientas/machetes' },
            { name: 'Tijeras', href: '/categoria/cuchilleria/herramientas/tijeras' }
          ]
        }
      ]
    },
    {
      label: 'PESCA Y CAMPING',
      href: '/categoria/pesca-y-camping',
      submenu: [
        {
          category: 'Pesca',
          items: [
            { name: 'Cañas de Pescar', href: '/categoria/pesca-y-camping/pesca/canas-de-pescar' },
            { name: 'Reels y Carretes', href: '/categoria/pesca-y-camping/pesca/reels-carretes' },
            { name: 'Líneas y Señuelos', href: '/categoria/pesca-y-camping/pesca/lineas-senuelos' },
            { name: 'Accesorios de Pesca', href: '/categoria/pesca-y-camping/pesca/accesorios-pesca' }
          ]
        },
        {
          category: 'Camping',
          items: [
            { name: 'Carpas y Refugios', href: '/categoria/pesca-y-camping/camping/carpas-refugios' },
            { name: 'Bolsas de Dormir', href: '/categoria/pesca-y-camping/camping/bolsas-dormir' },
            { name: 'Cocina y Comida', href: '/categoria/pesca-y-camping/camping/cocina-comida' },
            { name: 'Iluminación', href: '/categoria/pesca-y-camping/camping/iluminacion' }
          ]
        },
        {
          category: 'Outdoor',
          items: [
            { name: 'Mochilas', href: '/categoria/pesca-y-camping/outdoor/mochilas' },
            { name: 'Navegación', href: '/categoria/pesca-y-camping/outdoor/navegacion' },
            { name: 'Supervivencia', href: '/categoria/pesca-y-camping/outdoor/supervivencia' }
          ]
        }
      ]
    },
    {
      label: 'OFERTAS',
      href: '/ofertas'
    }
  ];

  return (
    <>
      {/* Top Bar - Con letra e iconos más grandes */}
      <div className="bg-gray-700 text-white text-base py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="font-medium">armeriatheguns@yahoo.com.ar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-medium">0291 15-648-6668</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-orange-400 font-semibold text-lg">Dólar: ${currentExchangeRate.toLocaleString()}</span>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0H7.983C3.582 0 0 3.582 0 7.983v4.034C0 16.418 3.582 20 7.983 20h4.034C16.418 20 20 16.418 20 12.017V7.983C20 3.582 16.418 0 12.017 0zm3.732 10c0 3.161-2.571 5.732-5.732 5.732S4.285 13.161 4.285 10s2.571-5.732 5.732-5.732S15.749 6.839 15.749 10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Rediseñado, agrandado y organizado */}
      <header className="bg-white shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-40 md:h-48">
            {/* Logo Section - Agrandado */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src="/images/LogoTheGuns.png"
                    alt="The Guns - Armería Especializada"
                    width={320}
                    height={320}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Search Section - Centrado, agrandado y botón corregido */}
            <div className="hidden lg:flex flex-1 justify-center px-12">
              <div className="relative w-full max-w-3xl group">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos, marcas, categorías..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-36 py-5 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg shadow-lg bg-gray-50 focus:bg-white transition-all duration-300 placeholder-gray-500 hover:shadow-xl"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button className="h-11 px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2">
                      <Search className="h-5 w-5" />
                      <span className="hidden xl:block text-sm font-black">BUSCAR</span>
                    </button>
                  </div>
                </div>
                
                {/* Search suggestions - Mejorado y agrandado */}
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                    <div className="p-8">
                      <div className="text-base font-semibold text-gray-600 mb-4">Sugerencias de búsqueda:</div>
                      <div className="space-y-3">
                        {['Pistolas', 'Rifles', 'Municiones', 'Óptica'].map((suggestion, index) => (
                          <div key={index} className="flex items-center p-4 hover:bg-orange-50 rounded-xl cursor-pointer transition-all duration-200 group">
                            <Search className="h-5 w-5 text-gray-400 mr-4 group-hover:text-orange-500" />
                            <span className="text-gray-700 group-hover:text-orange-700 text-base">{suggestion} {searchQuery}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-100 mt-6 pt-6">
                        <div className="text-base font-semibold text-gray-600 mb-4">Categorías populares:</div>
                        <div className="flex flex-wrap gap-3">
                          {['Pistolas Nuevas', 'Óptica', 'Airsoft', 'Municiones'].map((category, index) => (
                            <span key={index} className="px-5 py-3 bg-orange-100 text-orange-700 rounded-full text-base hover:bg-orange-200 cursor-pointer transition-all duration-200 font-medium">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions Section - Agrandado */}
            <div className="flex items-center space-x-6 flex-shrink-0">
              {/* User Account - Agrandado */}
              <div className="hidden xl:flex items-center space-x-3 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors">
                <User className="h-6 w-6" />
                <span className="text-base font-medium">Mi Cuenta</span>
              </div>

              {/* Cart - Agrandado */}
              <button
                onClick={onCartClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-4"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-sm opacity-90">Total</div>
                  <div className="font-black text-base">${(cartItemsCount * 50000).toLocaleString()}</div>
                </div>
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </button>

              {/* Mobile Menu - Agrandado */}
              <button
                className="xl:hidden p-4 bg-gray-100 hover:bg-orange-100 rounded-xl transition-all duration-300 hover:shadow-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Search - Agrandado */}
          <div className="lg:hidden pb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-16 py-5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg shadow-lg bg-gray-50 focus:bg-white transition-all duration-300"
              />
              <button className="absolute right-4 top-4 p-2 text-gray-400 hover:text-orange-600 transition-colors">
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Estilo La Triestina con letras más grandes y centrado */}
      <nav className="bg-orange-600 shadow-xl hidden xl:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-8 py-5 text-base font-black text-white transition-all duration-300 hover:bg-orange-700 tracking-wide"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-2xl py-10 px-12 z-50 min-w-[1000px] border-t-4 border-orange-600 rounded-b-lg">
                      <div className="grid grid-cols-4 gap-12">
                        {item.submenu.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-black text-gray-800 mb-6 text-base uppercase tracking-wider border-b-2 border-orange-200 pb-3">
                              {section.category}
                            </h3>
                            <ul className="space-y-4">
                              {section.items.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subitem.href}
                                    className="text-gray-700 hover:text-orange-600 transition-colors text-base block py-2 hover:pl-3 hover:border-l-3 hover:border-orange-600 font-medium leading-relaxed"
                                  >
                                    {subitem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Favorites separado con espacio */}
              <Link
                href="/favoritos"
                className="flex items-center space-x-2 text-white hover:bg-orange-700 px-8 py-5 transition-all duration-300 ml-8"
              >
                <Heart className="h-5 w-5" />
                <span className="font-black text-base tracking-wide">FAVORITOS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t-4 border-orange-600 shadow-xl">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-200 pb-4">
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-gray-800 hover:text-orange-600 font-bold text-lg rounded-lg hover:bg-orange-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-6 mt-3 space-y-2">
                      {item.submenu.map((section, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-bold text-sm text-gray-600 mb-2 uppercase tracking-wide">
                            {section.category}
                          </h4>
                          {section.items.map((subitem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subitem.href}
                              className="block text-sm text-gray-600 hover:text-orange-600 py-1 ml-3 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/favoritos"
                className="block py-3 px-4 text-gray-800 hover:text-orange-600 font-bold text-lg rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAVORITOS
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}