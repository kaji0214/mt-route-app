import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'test',
      email: 'test@example.com',
    },
  })

  await prisma.mountain.create({
    data: {
      name: '高尾山',
      user: {
        connect: {
          id: user.id,
        },
      },
      lat: 35.62631874702758,
      lng: 139.24318056534622,
    },
  })
  await prisma.mountain.create({
    data: {
      name: '雲取山',
      user: {
        connect: {
          id: user.id,
        },
      },
      lat: 35.85639892891088,
      lng: 138.94395796486026,
    },
  })
  await prisma.mountain.create({
    data: {
      name: '富士山',
      user: {
        connect: {
          id: user.id,
        },
      },
      lat: 35.36125465611279,
      lng: 138.72727753399917,
    },
  })
  await prisma.mountain.create({
    data: {
      name: '金峰山',
      user: {
        connect: {
          id: user.id,
        },
      },
      lat: 35.87271831707378,
      lng: 138.62534094952554,
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
