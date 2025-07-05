// src/components/ui/Header.tsx
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
    }
  ];

  return (
    <>
      {/* Top Bar - Exacto como Triestina */}
      <div className="bg-gray-700 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>ventas@theguns.com.ar</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>11 3974-1503</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>11 4501-6803</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-orange-400">Dólar: ${currentExchangeRate.toLocaleString()}</span>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-orange-400 hover:text-orange-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0H7.983C3.582 0 0 3.582 0 7.983v4.034C0 16.418 3.582 20 7.983 20h4.034C16.418 20 20 16.418 20 12.017V7.983C20 3.582 16.418 0 12.017 0zm3.732 10c0 3.161-2.571 5.732-5.732 5.732S4.285 13.161 4.285 10s2.571-5.732 5.732-5.732S15.749 6.839 15.749 10z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Con Logo Real */}
      <header className="bg-white shadow-md border-b-4 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-36 md:h-40">
            {/* Logo - Extra grande */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/images/LogoTheGuns.png"
                  alt="The Guns - Armería Especializada"
                  width={300}
                  height={300}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
            
            {/* Search Bar - Exacto como Triestina */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-6 pr-20 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg shadow-sm"
                />
                <button className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded font-bold transition-colors shadow-md">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart - Exacto como Triestina */}
              <button
                onClick={onCartClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-xs opacity-90">Total</div>
                  <div className="font-black">${(cartItemsCount * 50000).toLocaleString()}</div>
                </div>
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </button>

              {/* Mobile Menu */}
              <button
                className="xl:hidden p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Exacto como Triestina */}
      <nav className="bg-orange-600 shadow-xl hidden xl:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-8 py-5 text-sm font-black text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg border-r border-orange-700/30 tracking-wide"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {/* Mega Menu Dropdown - Exacto como Triestina */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-2xl py-8 px-10 z-50 min-w-[900px] border-t-4 border-orange-600 rounded-b-lg">
                      <div className="grid grid-cols-4 gap-10">
                        {item.submenu.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-black text-gray-800 mb-5 text-sm uppercase tracking-wider border-b-2 border-orange-200 pb-2">
                              {section.category}
                            </h3>
                            <ul className="space-y-3">
                              {section.items.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subitem.href}
                                    className="text-gray-700 hover:text-orange-600 transition-colors text-sm block py-2 hover:pl-2 hover:border-l-2 hover:border-orange-600 font-medium"
                                  >
                                    {subitem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Featured Banner en Dropdown */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
                          <h4 className="font-bold mb-1">¡Ofertas Especiales!</h4>
                          <p className="text-sm opacity-90">Hasta 25% OFF en productos seleccionados</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Favorites en Nav - Exacto como Triestina */}
            <div className="flex items-center">
              <Link
                href="/favoritos"
                className="flex items-center space-x-2 text-white hover:bg-orange-700 px-6 py-5 transition-all duration-300 border-l border-orange-700/30"
              >
                <Heart className="h-5 w-5" />
                <span className="font-black text-sm tracking-wide">FAVORITOS</span>
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