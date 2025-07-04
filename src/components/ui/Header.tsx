// src/components/ui/Header.tsx
'use client'

import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
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
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Armas Cortas',
      href: '/categoria/armas-cortas',
      submenu: [
        { label: 'Pistolas', href: '/categoria/pistolas' },
        { label: 'Revólveres', href: '/categoria/revolveres' },
        { label: 'Pistolas de Aire', href: '/categoria/pistolas-aire' },
      ]
    },
    {
      label: 'Armas Largas',
      href: '/categoria/armas-largas',
      submenu: [
        { label: 'Rifles', href: '/categoria/rifles' },
        { label: 'Escopetas', href: '/categoria/escopetas' },
        { label: 'Carabinas', href: '/categoria/carabinas' },
        { label: 'Rifles de Aire', href: '/categoria/rifles-aire' },
      ]
    },
    {
      label: 'Municiones',
      href: '/categoria/municiones',
      submenu: [
        { label: 'Para Pistola', href: '/categoria/municion-pistola' },
        { label: 'Para Rifle', href: '/categoria/municion-rifle' },
        { label: 'Para Escopeta', href: '/categoria/municion-escopeta' },
        { label: 'Aire Comprimido', href: '/categoria/aire-comprimido' },
      ]
    },
    {
      label: 'Óptica',
      href: '/categoria/optica',
      submenu: [
        { label: 'Miras Telescópicas', href: '/categoria/miras-telescopicas' },
        { label: 'Puntos Rojos', href: '/categoria/puntos-rojos' },
        { label: 'Binoculares', href: '/categoria/binoculares' },
        { label: 'Visores Nocturnos', href: '/categoria/visores-nocturnos' },
      ]
    },
    {
      label: 'Equipamiento',
      href: '/categoria/equipamiento',
      submenu: [
        { label: 'Chalecos Tácticos', href: '/categoria/chalecos' },
        { label: 'Cascos', href: '/categoria/cascos' },
        { label: 'Mochilas Tácticas', href: '/categoria/mochilas' },
        { label: 'Cinturones', href: '/categoria/cinturones' },
      ]
    },
    {
      label: 'Airsoft',
      href: '/categoria/airsoft',
      submenu: [
        { label: 'Rifles Eléctricos', href: '/categoria/rifles-electricos' },
        { label: 'Pistolas Airsoft', href: '/categoria/pistolas-airsoft' },
        { label: 'BBs', href: '/categoria/bbs' },
        { label: 'Accesorios', href: '/categoria/accesorios-airsoft' },
      ]
    },
    {
      label: 'Nosotros',
      href: '/nosotros',
    },
    {
      label: 'Contacto',
      href: '/contacto',
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>(54-11) 3974.1503 / 4501.6803</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>ventas@theguns.com.ar</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Lun-Vie 9:30-18:30hs | Sáb 9:30-13:30hs</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Av. Nazca 2489, CABA</span>
              </div>
              <div className="bg-red-600 px-2 py-1 rounded text-xs font-semibold">
                USD: ${currentExchangeRate.toFixed(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-red-600 to-black p-3 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div className="ml-3">
                <h1 className="text-3xl font-bold text-gray-800">
                  <span className="text-red-600">The</span>{" "}
                  <span className="text-black">Guns</span>
                </h1>
                <p className="text-xs text-gray-500">Armería especializada</p>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden xl:flex space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              {/* User Account */}
              <Link href="/mi-cuenta" className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Mi Cuenta</span>
              </Link>
              
              {/* Cart */}
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="xl:hidden"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="xl:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-red-600 py-2 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block text-sm text-gray-600 hover:text-red-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/mi-cuenta"
                  className="block text-gray-700 hover:text-red-600 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mi Cuenta
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Notice Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center space-x-4">
            <span>🚚 Envío gratis a partir de $50.000</span>
            <span>•</span>
            <span>🔫 Armas y municiones: retiro en local únicamente</span>
            <span>•</span>
            <span>🆔 CLU vigente requerido</span>
            <span>•</span>
            <Link href="/clu" className="underline hover:no-underline">
              + Info sobre CLU
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}