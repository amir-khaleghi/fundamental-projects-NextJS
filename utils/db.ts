// utils/db.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare const global: {
  prisma?: PrismaClient;
};

if (process.env.NODE_ENV === 'production') {
  // In production, create a new PrismaClient instance for each request
  prisma = new PrismaClient();
} else {
  // In development, use a global variable to store the PrismaClient instance
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
