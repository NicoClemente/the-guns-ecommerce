import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const latestRate = await prisma.exchangeRate.findFirst({
      where: {
        fromCurrency: 'USD',
        toCurrency: 'ARS',
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!latestRate) {
      return NextResponse.json({
        success: false,
        error: 'No exchange rate found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: {
        rate: Number(latestRate.rate),
        createdAt: latestRate.createdAt,
        source: latestRate.source,
      }
    })

  } catch (error) {
    console.error('Error fetching exchange rate:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fromCurrency, toCurrency, rate, source } = body

    if (!fromCurrency || !toCurrency || !rate) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 })
    }

    if (rate <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Rate must be positive'
      }, { status: 400 })
    }

    const newRate = await prisma.exchangeRate.create({
      data: {
        fromCurrency,
        toCurrency,
        rate,
        source: source || 'manual',
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        rate: Number(newRate.rate),
        createdAt: newRate.createdAt,
        source: newRate.source,
      }
    })

  } catch (error) {
    console.error('Error creating exchange rate:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}