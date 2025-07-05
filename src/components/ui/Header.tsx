// src/components/ui/Header.tsx
'use client'

import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Mail, MapPin, Clock, ChevronDown, Heart } from 'lucide-react';
import Link from 'next/link';

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
            'Pistolas Nuevas',
            'Pistolas Usadas', 
            'Revólveres Nuevos',
            'Revólveres Usados'
          ]
        },
        {
          category: 'Armas Largas',
          items: [
            'Fusiles y Carabinas Nuevas',
            'Fusiles Usados',
            'Escopetas Nuevas',
            'Escopetas Usadas',
            'Carabinas Usadas'
          ]
        },
        {
          category: 'Aire comprimido y CO2',
          items: [
            'Armas Largas Aire y Co2',
            'Pistolas Aire y Co2',
            'Insumos Aire y Co2',
            'Balines',
            'Cargadores'
          ]
        },
        {
          category: 'Municiones',
          items: [
            'Balas',
            'Cartuchos'
          ]
        },
        {
          category: 'Defensa Personal',
          items: [
            'Gas Pimienta',
            'Consumibles',
            'Lanzadoras',
            'Varios'
          ]
        }
      ]
    },
    {
      label: 'AIRSOFT',
      href: '/categoria/airsoft',
      submenu: [
        {
          category: 'Armas',
          items: [
            'Rifles Eléctricos AEG',
            'Pistolas GBB',
            'Rifles de Resorte',
            'Escopetas Airsoft'
          ]
        },
        {
          category: 'Munición',
          items: [
            'BBs 0.20g',
            'BBs 0.25g',
            'BBs 0.28g',
            'BBs Biodegradables'
          ]
        },
        {
          category: 'Accesorios',
          items: [
            'Cargadores',
            'Baterías',
            'Upgrades',
            'Repuestos'
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
            'Miras Telescópicas',
            'Puntos Rojos',
            'Miras Holográficas',
            'Visores Nocturnos'
          ]
        },
        {
          category: 'Accesorios',
          items: [
            'Monturas',
            'Binoculares',
            'Rangefinders',
            'Linternas'
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
            'Cuchillos Tácticos',
            'Cuchillos de Caza',
            'Multitools',
            'Navajas'
          ]
        }
      ]
    },
    {
      label: 'PESCA Y CAMPING',
      href: '/categoria/pesca-camping',
      submenu: [
        {
          category: 'Pesca',
          items: [
            'Cañas de Pescar',
            'Reels',
            'Señuelos',
            'Accesorios'
          ]
        },
        {
          category: 'Camping',
          items: [
            'Carpas',
            'Sleeping',
            'Mochilas',
            'Equipamiento'
          ]
        }
      ]
    },
    {
      label: 'OFERTAS',
      href: '/ofertas',
      className: 'text-white font-bold'
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-700 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>armeria@triestina.com.ar</span>
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
              <a href="#" className="text-orange-400 hover:text-orange-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.983C3.582 0 0 3.582 0 7.983v4.034C0 16.418 3.582 20 7.983 20h4.034C16.418 20 20 16.418 20 12.017V7.983C20 3.582 16.418 0 12.017 0zm3.732 10c0 3.161-2.571 5.732-5.732 5.732S4.285 13.161 4.285 10s2.571-5.732 5.732-5.732S15.749 6.839 15.749 10z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.23 6.73c.01.15.01.3.01.45 0 4.64-3.53 9.99-9.99 9.99A9.94 9.94 0 010 15.21c.33.04.66.06 1 .06 1.92 0 3.68-.65 5.09-1.75a3.5 3.5 0 01-3.27-2.43c.2.04.41.06.62.06.3 0 .58-.04.85-.11A3.5 3.5 0 011.48 7.7v-.04c.48.27 1.04.43 1.63.45A3.5 3.5 0 011.04 3.5c0-.64.17-1.24.47-1.76A9.93 9.93 0 008.74 6.4a3.5 3.5 0 015.96-3.19A7.02 7.02 0 0016.94 2.4a3.5 3.5 0 01-1.54 1.94c.6-.07 1.19-.23 1.73-.46a7.52 7.52 0 01-1.5 1.82z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="The Guns Logo" 
                  className="h-12 w-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                  <span className="text-orange-600">THE</span>{" "}
                  <span className="text-gray-800">GUNS</span>
                </h1>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  Armería Especializada
                </p>
              </div>
            </Link>
            
            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-16 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded text-sm font-semibold transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              <Link href="/mi-cuenta" className="hidden lg:flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                <User className="h-5 w-5" />
              </Link>
              
              {/* Cart */}
              <button
                onClick={onCartClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <span className="hidden sm:inline">${cartItemsCount > 0 ? (cartItemsCount * 50000).toLocaleString() : '0'}</span>
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </button>

              {/* Mobile Menu */}
              <button
                className="xl:hidden p-2"
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
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Estilo Triestina */}
      <nav className="bg-orange-600 shadow-lg hidden xl:block">
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
                    className={`flex items-center px-6 py-4 text-sm font-bold transition-colors hover:bg-orange-700 ${
                      item.className || 'text-white'
                    }`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-2 h-4 w-4" />}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-2xl py-6 px-8 z-50 min-w-[800px]">
                      <div className="grid grid-cols-5 gap-8">
                        {item.submenu.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                              {section.category}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={`/categoria/${subitem.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm block py-1"
                                  >
                                    {subitem}
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
            </div>
            
            {/* Favorites in Nav */}
            <div className="flex items-center">
              <Link
                href="/favoritos"
                className="flex items-center space-x-2 text-white hover:bg-orange-700 px-4 py-4 transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span className="font-bold text-sm">FAVORITOS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 px-2 text-gray-700 hover:text-orange-600 font-semibold border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((section, index) => (
                        <div key={index} className="mb-3">
                          <h4 className="font-semibold text-sm text-gray-600 mb-1">
                            {section.category}
                          </h4>
                          {section.items.map((subitem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/categoria/${subitem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-sm text-gray-500 hover:text-orange-600 py-1 ml-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem}
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
                className="block py-3 px-2 text-gray-700 hover:text-orange-600 font-semibold"
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