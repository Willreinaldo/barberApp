// seeds.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.barber.createMany({
    data: [
      { name: 'João' },
      { name: 'Nathan' },
      { name: 'Lucas' },
    ],
  });

  await prisma.service.createMany({
    data: [
      { name: 'Barba', price: 15 },
      { name: 'Cabelo', price: 20 },
    ],
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    console.log("Dados armazenados");
    await prisma.$disconnect();
  });