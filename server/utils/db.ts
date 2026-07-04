import { createRequire } from 'module'

// Memaksa pembacaan paket secara runtime lewat CommonJS require
const require = createRequire(import.meta.url)
const { PrismaClient } = require('@prisma/client')

const createPrismaClient = () => new PrismaClient()

type PrismaClientSingleton = ReturnType<typeof createPrismaClient>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
