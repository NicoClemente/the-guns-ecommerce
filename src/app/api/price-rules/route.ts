import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const priceRule = await prisma.priceRule.findFirst({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!priceRule) {
      return NextResponse.json({
        success: false,
        error: 'No active price rules found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: {
        importedMarkup: Number(priceRule.importedMarkup),
        nationalMarkup: Number(priceRule.nationalMarkup),
        minOrderFreeShipping: Number(priceRule.minOrderFreeShipping),
        updatedAt: priceRule.updatedAt,
      }
    })

  } catch (error) {
    console.error('Error fetching price rules:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { importedMarkup, nationalMarkup, minOrderFreeShipping, name, description } = body

    if (!importedMarkup || !nationalMarkup || !minOrderFreeShipping) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 })
    }

    if (importedMarkup <= 0 || nationalMarkup <= 0 || minOrderFreeShipping < 0) {
      return NextResponse.json({
        success: false,
        error: 'Invalid values'
      }, { status: 400 })
    }

    await prisma.priceRule.updateMany({
      where: {
        isActive: true,
      },
      data: {
        isActive: false,
      },
    })

    const newRule = await prisma.priceRule.create({
      data: {
        name: name || 'Regla actualizada',
        description,
        importedMarkup,
        nationalMarkup,
        minOrderFreeShipping,
        isActive: true,
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        importedMarkup: Number(newRule.importedMarkup),
        nationalMarkup: Number(newRule.nationalMarkup),
        minOrderFreeShipping: Number(newRule.minOrderFreeShipping),
        updatedAt: newRule.updatedAt,
      }
    })

  } catch (error) {
    console.error('Error creating price rule:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}