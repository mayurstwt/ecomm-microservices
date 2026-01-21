import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (data: any) => {
    return prisma.product.create({data})
}

export const getAllProducts = async () => {
    return prisma.product.findMany({where: {isActive: true}})
}