// src/components/ui/NewsletterSection.tsx
'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simular envío
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail('')
    }, 1500)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubscribed ? (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mantente Informado
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Suscribite a nuestro newsletter y recibí información sobre nuevos productos, 
                ofertas especiales y noticias del sector.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu email aquí..."
                      className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Suscribirse</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-white/70 text-sm mt-4">
                No spam. Solo información relevante. Podés darte de baja cuando quieras.
              </p>
            </>
          ) : (
            <div className="py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                ¡Gracias por suscribirte!
              </h2>
              
              <p className="text-xl text-white/90">
                Pronto recibirás nuestras novedades en tu email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}