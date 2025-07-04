import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding The Guns database...')

  // Crear marcas
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { slug: 'beretta' },
      update: {},
      create: {
        name: 'BERETTA',
        slug: 'beretta',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'smith-wesson' },
      update: {},
      create: {
        name: 'SMITH & WESSON',
        slug: 'smith-wesson',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'eotech' },
      update: {},
      create: {
        name: 'EOTECH',
        slug: 'eotech',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'condor' },
      update: {},
      create: {
        name: 'CONDOR',
        slug: 'condor',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'federal' },
      update: {},
      create: {
        name: 'FEDERAL',
        slug: 'federal',
      },
    }),
  ])

  // Crear categorías principales
  const armasCortas = await prisma.category.upsert({
    where: { slug: 'armas-cortas' },
    update: {},
    create: {
      name: 'Armas Cortas',
      slug: 'armas-cortas',
      icon: '🔫',
      description: 'Pistolas y revólveres',
    },
  })

  const armasLargas = await prisma.category.upsert({
    where: { slug: 'armas-largas' },
    update: {},
    create: {
      name: 'Armas Largas',
      slug: 'armas-largas',
      icon: '🎯',
      description: 'Rifles, escopetas y carabinas',
    },
  })

  const optica = await prisma.category.upsert({
    where: { slug: 'optica' },
    update: {},
    create: {
      name: 'Óptica',
      slug: 'optica',
      icon: '🔭',
      description: 'Miras, visores y accesorios ópticos',
    },
  })

  const equipamiento = await prisma.category.upsert({
    where: { slug: 'equipamiento-tactico' },
    update: {},
    create: {
      name: 'Equipamiento Táctico',
      slug: 'equipamiento-tactico',
      icon: '🛡️',
      description: 'Chalecos, cascos y equipamiento táctico',
    },
  })

  const municiones = await prisma.category.upsert({
    where: { slug: 'municiones' },
    update: {},
    create: {
      name: 'Municiones',
      slug: 'municiones',
      icon: '💥',
      description: 'Cartuchos y balas para armas de fuego',
    },
  })

  // Crear subcategorías
  const pistolas = await prisma.category.upsert({
    where: { slug: 'pistolas' },
    update: {},
    create: {
      name: 'Pistolas',
      slug: 'pistolas',
      parentId: armasCortas.id,
      description: 'Pistolas semiautomáticas',
    },
  })

  const rifles = await prisma.category.upsert({
    where: { slug: 'rifles' },
    update: {},
    create: {
      name: 'Rifles',
      slug: 'rifles',
      parentId: armasLargas.id,
      description: 'Rifles semiautomáticos y de cerrojo',
    },
  })

  // Crear reglas de precios
  await prisma.priceRule.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      name: 'Reglas por defecto',
      description: 'Configuración de precios estándar',
      importedMarkup: 1.15, // 15% para importados
      nationalMarkup: 1.10, // 10% para nacionales
      minOrderFreeShipping: 50000,
    },
  })

  // Crear tipo de cambio inicial
  await prisma.exchangeRate.create({
    data: {
      fromCurrency: 'USD',
      toCurrency: 'ARS',
      rate: 1450,
      source: 'manual',
    },
  })

  // Crear productos
  const products = [
    {
      name: 'PISTOLA BERETTA 92FS 9MM',
      slug: 'pistola-beretta-92fs-9mm',
      description: 'Pistola semiautomática Beretta 92FS calibre 9mm',
      shortDescription: 'Pistola Beretta 92FS 9mm',
      sku: 'BER-92FS-9MM',
      basePriceUSD: 850.0,
      originalPriceUSD: 950.0,
      isImported: true,
      stockQuantity: 8,
      requiresCLU: true,
      freeShipping: true,
      categoryId: pistolas.id,
      brandId: brands.find(b => b.slug === 'beretta')?.id,
      specifications: JSON.stringify({
        calibre: '9mm Parabellum',
        capacidad: '15+1 tiros',
        canon: '125mm',
        peso: '950 gramos'
      }),
      primaryImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400',
    },
    {
      name: 'RIFLE AR-15 SMITH & WESSON M&P15',
      slug: 'rifle-ar15-smith-wesson-mp15',
      description: 'Rifle semiautomático AR-15 calibre .223 Remington',
      shortDescription: 'Rifle AR-15 M&P15',
      sku: 'SW-MP15-223',
      basePriceUSD: 1250.0,
      isImported: true,
      stockQuantity: 5,
      requiresCLU: true,
      freeShipping: true,
      categoryId: rifles.id,
      brandId: brands.find(b => b.slug === 'smith-wesson')?.id,
      specifications: JSON.stringify({
        calibre: '.223 Remington / 5.56 NATO',
        canon: '406mm',
        capacidad: '30 tiros',
        longitud: '838mm'
      }),
      primaryImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    },
  ]

  for (const productData of products) {
    const product = await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {},
      create: productData,
    })

    // Agregar imagen principal
    await prisma.productImage.upsert({
      where: { id: `${product.id}-primary` },
      update: {},
      create: {
        id: `${product.id}-primary`,
        url: productData.primaryImage,
        alt: productData.name,
        order: 0,
        productId: product.id,
      },
    })

    // Agregar algunas reseñas de ejemplo
    await prisma.productReview.create({
      data: {
        rating: Math.floor(Math.random() * 2) + 4, // 4 o 5 estrellas
        title: 'Excelente producto',
        comment: 'Muy buena calidad, recomendado.',
        userName: 'Juan P.',
        userEmail: 'juan@example.com',
        productId: product.id,
      },
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })