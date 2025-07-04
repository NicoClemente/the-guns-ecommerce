// src/app/contacto/page.tsx
'use client'

import { useState } from 'react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Car, Train } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    motivo: 'consulta'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        motivo: 'consulta'
      })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={0}
        onCartClick={() => {}}
        currentExchangeRate={1450}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Contacto
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Contactanos por cualquier consulta
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-red-600">Inicio</a></li>
              <li>/</li>
              <li className="text-gray-800">Contacto</li>
            </ol>
          </nav>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dirección</h3>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Horarios</h3>
              <p className="text-gray-600">
                Lun-Vie: 9:30-18:30hs<br />
                Sáb: 9:30-13:30hs<br />
                Dom: Cerrado
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Envianos tu Consulta
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-red-600 hover:text-red-700 font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="11-1234-5678"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motivo de consulta
                      </label>
                      <select
                        name="motivo"
                        value={formData.motivo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="consulta">Consulta general</option>
                        <option value="producto">Consulta sobre producto</option>
                        <option value="precio">Consulta de precio</option>
                        <option value="stock">Consulta de stock</option>
                        <option value="clu">Información sobre CLU</option>
                        <option value="envio">Envíos y retiros</option>
                        <option value="reclamo">Reclamo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Resumen de tu consulta"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Detalle tu consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Para consultas rápidas, escribinos por WhatsApp. 
                  Respondemos de Lun-Vie de 9:30 a 18:30hs.
                </p>
                <a
                  href="https://wa.me/541139741503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Como Llegar */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  ¿Cómo llegar?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">En Auto</h4>
                      <p className="text-sm text-gray-600">
                        Av. Nazca 2489, entre Av. Directorio y Cuenca. 
                        Estacionamiento disponible en la zona.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Train className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Transporte Público</h4>
                      <p className="text-sm text-gray-600">
                        <strong>Subte:</strong> Línea A - Estación Nazca (3 cuadras)<br />
                        <strong>Colectivos:</strong> 2, 36, 92, 117, 124, 127, 141
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Importante */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  ⚠️ Importante
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Para comprar armas y municiones es <strong>obligatorio</strong> presentar CLU vigente</li>
                  <li>• El retiro de armas y municiones debe hacerse personalmente en el local</li>
                  <li>• Traer documento de identidad para cualquier compra</li>
                  <li>• Consultá disponibilidad de productos antes de venir</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-lg text-gray-600">
                Av. Nazca 2489, Floresta, Buenos Aires
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0896594580044!2d-58.4789!3d-34.6261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d8b6b8b6b8%3A0x1234567890abcdef!2sAv.%20Nazca%202489%2C%20C1419%20CABA!5e0!3m2!1ses!2sar!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de The Guns"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}