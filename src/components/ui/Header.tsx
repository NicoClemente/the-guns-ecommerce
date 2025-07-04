import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentExchangeRate: number;
}

export function Header({ cartItemsCount, onCartClick, currentExchangeRate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-800 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>(54-11) 3974.1503 / 4501.6803</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>ventas@theguns.com.ar</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Av. Nazca 2489, Bs. As. Argentina</span>
              </div>
              <div className="text-yellow-300 font-semibold">
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
            <div className="flex items-center">
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
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Armas Cortas</a>
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Armas Largas</a>
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Óptica</a>
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Airsoft</a>
              <a href="#" className="text-gray-700 hover:text-red-700 font-medium">Accesorios</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-700">
                <User className="h-5 w-5" />
                <span className="text-sm">Mi Cuenta</span>
              </button>
              
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-red-700"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
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
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Inicio</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Armas Cortas</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Armas Largas</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Óptica</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Airsoft</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Accesorios</a>
                <a href="#" className="text-gray-700 hover:text-red-700 py-2">Mi Cuenta</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        🚚 Envío gratis a partir de $50.000 | 🔫 Armas de fuego y municiones solo con retiro en el local | 🆔 CLU requerido
      </div>
    </>
  );
}