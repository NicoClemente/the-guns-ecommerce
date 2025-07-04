import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse query parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const categoryId = searchParams.get('categoryId') || undefined
    const brandId = searchParams.get('brandId') || undefined
    const search = searchParams.get('search') || undefined
    const inStock = searchParams.get('inStock') === 'true'
    const requiresCLU = searchParams.get('requiresCLU') === 'true'
    const freeShipping = searchParams.get('freeShipping') === 'true'
    const featured = searchParams.get('featured') === 'true'
    const onSale = searchParams.get('onSale') === 'true'
    
    // Sort parameters
    const sortField = searchParams.get('sortField') || 'createdAt'
    const sortDirection = searchParams.get('sortDirection') || 'desc'

    // Build where clause
    const where: any = {
      publishedAt: { not: null },
    }

    if (categoryId) {
      where.OR = [
        { categoryId },
        { category: { parentId: categoryId } }
      ]
    }

    if (brandId) {
      where.brandId = brandId
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (inStock) {
      where.inStock = true
      where.stockQuantity = { gt: 0 }
    }

    if (requiresCLU !== undefined) {
      where.requiresCLU = requiresCLU
    }

    if (freeShipping !== undefined) {
      where.freeShipping = freeShipping
    }

    if (featured) {
      where.featured = true
    }

    if (onSale) {
      where.onSale = true
    }

    // Calculate offset
    const offset = (page - 1) * limit

    // Get products with relations
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          category: true,
          brand: true,
          images: {
            orderBy: { order: 'asc' }
          },
          reviews: {
            select: {
              rating: true
            }
          }
        },
        orderBy: {
          [sortField]: sortDirection as 'asc' | 'desc'
        },
        skip: offset,
        take: limit,
      }),
      prisma.product.count({ where })
    ])

    // Add calculated fields
    const productsWithExtras = products.map(product => ({
      ...product,
      averageRating: product.reviews.length > 0 
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0,
      reviewCount: product.reviews.length,
      primaryImage: product.images[0]?.url || null,
    }))

    return NextResponse.json({
      success: true,
      data: productsWithExtras,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}