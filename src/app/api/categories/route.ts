import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeProducts = searchParams.get('includeProducts') === 'true'
    const parentOnly = searchParams.get('parentOnly') === 'true'

    const where: any = {}
    
    if (parentOnly) {
      where.parentId = null
    }

    const categories = await prisma.category.findMany({
      where,
      include: {
        subcategories: {
          include: {
            _count: {
              select: {
                products: {
                  where: {
                    publishedAt: { not: null },
                    inStock: true,
                  }
                }
              }
            }
          }
        },
        _count: {
          select: {
            products: {
              where: {
                publishedAt: { not: null },
                inStock: true,
              }
            }
          }
        },
        ...(includeProducts && {
          products: {
            where: {
              publishedAt: { not: null },
              inStock: true,
            },
            take: 6,
            include: {
              brand: true,
              images: {
                take: 1,
                orderBy: { order: 'asc' }
              }
            }
          }
        })
      },
      orderBy: {
        name: 'asc'
      }
    })

    // Transform data to match frontend expectations
    const transformedCategories = categories.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      icon: category.icon,
      description: category.description,
      productCount: category._count.products,
      subcategories: category.subcategories.map(sub => ({
        id: sub.id,
        name: sub.name,
        slug: sub.slug,
        count: sub._count.products,
      })),
      ...(includeProducts && { products: category.products })
    }))

    return NextResponse.json({
      success: true,
      data: transformedCategories
    })

  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}