const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function sil() {
    await prisma.product.deleteMany()
}

sil()