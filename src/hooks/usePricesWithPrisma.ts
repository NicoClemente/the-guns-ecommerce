import { useState, useEffect } from 'react'
import { Product, PriceConfig, ProductWithPrice } from '@/types'

export function usePricesWithPrisma() {
  const [priceConfig, setPriceConfig] = useState<PriceConfig>({
    currencyRates: {
      usdToArs: 1450,
      lastUpdated: new Date(),
    },
    importedMarkup: 1.15,
    nationalMarkup: 1.10,
    minOrderFreeShipping: 50000,
  })

  const [isLoading, setIsLoading] = useState(false)

  // Fetch exchange rate from API
  const fetchExchangeRate = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/exchange-rate')
      const data = await response.json()
      
      if (data.success) {
        setPriceConfig(prev => ({
          ...prev,
          currencyRates: {
            usdToArs: data.data.rate,
            lastUpdated: new Date(data.data.createdAt),
            source: data.data.source,
          }
        }))
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch price rules from API
  const fetchPriceRules = async () => {
    try {
      const response = await fetch('/api/price-rules')
      const data = await response.json()
      
      if (data.success) {
        setPriceConfig(prev => ({
          ...prev,
          importedMarkup: data.data.importedMarkup,
          nationalMarkup: data.data.nationalMarkup,
          minOrderFreeShipping: data.data.minOrderFreeShipping,
        }))
      }
    } catch (error) {
      console.error('Error fetching price rules:', error)
    }
  }

  // Calculate price for a single product
  const calculateProductPrice = (product: Product): ProductWithPrice => {
    let currentPrice: number
    let originalPrice: number | undefined

    if (product.isImported) {
      // Producto importado: USD * tipo de cambio * margen
      currentPrice = product.basePriceUSD 
        ? Number(product.basePriceUSD) * priceConfig.currencyRates.usdToArs * priceConfig.importedMarkup
        : 0
      
      originalPrice = product.originalPriceUSD
        ? Number(product.originalPriceUSD) * priceConfig.currencyRates.usdToArs * priceConfig.importedMarkup
        : undefined
    } else {
      // Producto nacional: ARS * margen
      currentPrice = product.basePriceARS 
        ? Number(product.basePriceARS) * priceConfig.nationalMarkup
        : 0
      
      originalPrice = product.originalPriceARS
        ? Number(product.originalPriceARS) * priceConfig.nationalMarkup
        : undefined
    }

    const discountPercentage = originalPrice 
      ? Math.round((1 - currentPrice / originalPrice) * 100)
      : undefined

    return {
      ...product,
      currentPrice: Math.round(currentPrice),
      originalPrice: originalPrice ? Math.round(originalPrice) : undefined,
      discountPercentage,
    }
  }

  // Calculate prices for multiple products
  const calculateProductsPrices = (products: Product[]): ProductWithPrice[] => {
    return products.map(calculateProductPrice)
  }

  // Update exchange rate manually
  const updateExchangeRate = async (newRate: number) => {
    try {
      const response = await fetch('/api/exchange-rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromCurrency: 'USD',
          toCurrency: 'ARS',
          rate: newRate,
          source: 'manual',
        }),
      })

      if (response.ok) {
        setPriceConfig(prev => ({
          ...prev,
          currencyRates: {
            usdToArs: newRate,
            lastUpdated: new Date(),
            source: 'manual',
          }
        }))
        return true
      }
      return false
    } catch (error) {
      console.error('Error updating exchange rate:', error)
      return false
    }
  }

  // Auto-update exchange rate every 30 minutes
  useEffect(() => {
    fetchExchangeRate()
    fetchPriceRules()

    const interval = setInterval(() => {
      fetchExchangeRate()
    }, 30 * 60 * 1000) // 30 minutos

    return () => clearInterval(interval)
  }, [])

  return {
    priceConfig,
    isLoading,
    calculateProductPrice,
    calculateProductsPrices,
    updateExchangeRate,
    fetchExchangeRate,
    fetchPriceRules,
  }
}