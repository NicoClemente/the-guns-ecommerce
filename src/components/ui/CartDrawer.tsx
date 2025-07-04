import { X, Plus, Minus, Trash2, CreditCard, Truck, ShoppingCart } from 'lucide-react';
import { CartItem } from '@/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  getProductPrice: (product: any) => { current: number; original?: number };
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  getProductPrice
}: CartDrawerProps) {
  const total = cartItems.reduce((sum, item) => {
    const price = getProductPrice(item.product);
    return sum + (price.current * item.quantity);
  }, 0);

  const hasRequiredCLU = cartItems.some(item => item.product.requiresCLU);
  const freeShipping = total >= 50000;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b bg-red-50">
          <h2 className="text-lg font-semibold text-gray-800">Carrito de Compras</h2>
          <button onClick={onClose} className="p-2 hover:bg-red-100 rounded transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center mt-16">
              <div className="text-gray-400 mb-4">
                <ShoppingCart className="h-16 w-16 mx-auto" />
              </div>
              <p className="text-gray-500 text-lg font-medium">Tu carrito está vacío</p>
              <p className="text-sm text-gray-400 mt-2">
                Agrega algunos productos para continuar
              </p>
              <button 
                onClick={onClose}
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const price = getProductPrice(item.product);
                return (
                  <div key={item.product.id} className="flex items-start space-x-4 p-4 border rounded-lg bg-gray-50">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 text-gray-800">
                        {item.product.name}
                      </h4>
                      <p className="text-red-600 font-semibold">
                        ${price.current.toLocaleString()}
                      </p>
                      {item.product.brand && (
                        <p className="text-xs text-gray-500">{item.product.brand}</p>
                      )}
                      {item.product.requiresCLU && (
                        <p className="text-xs text-orange-600 font-medium">⚠️ Requiere CLU</p>
                      )}
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 bg-white border rounded text-sm min-w-[2.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 hover:bg-red-100 rounded text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="mt-2 text-sm text-gray-600">
                        Subtotal: <span className="font-semibold">${(price.current * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            {/* Special Notices */}
            {hasRequiredCLU && (
              <div className="mb-4 p-3 bg-orange-100 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  ⚠️ Algunos productos requieren CLU vigente para completar la compra
                </p>
              </div>
            )}
            
            {/* Shipping Info */}
            <div className="mb-4">
              {freeShipping ? (
                <div className="flex items-center text-sm text-green-600">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>¡Envío gratis incluido!</span>
                </div>
              ) : (
                <div className="text-sm text-gray-600">
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    <span>Envío gratis desde $50.000</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Te faltan ${(50000 - total).toLocaleString()} para envío gratis
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((total / 50000) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Total */}
            <div className="flex justify-between items-center mb-4 p-3 bg-white rounded-lg border">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-red-600">
                ${total.toLocaleString()}
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Proceder al Pago</span>
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Seguir Comprando
              </button>
            </div>
            
            {/* Security Notice */}
            <div className="mt-4 text-xs text-gray-500 text-center">
              🔒 Pago seguro con SSL | 💳 Aceptamos MercadoPago
            </div>
          </div>
        )}
      </div>
    </div>
  );
}