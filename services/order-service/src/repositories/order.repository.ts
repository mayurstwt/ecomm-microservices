import { PrismaClient, OrderStatus } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (data: any) => {
    try {
       return await prisma.order.create({
        data: {
            userId: data.userId,
            status: OrderStatus.CREATED,
            total : data.total,
            items: {
                create: data.items
            }
        },
        include: {
            items: true
        }
    }); 
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
}


export const getOrdersByUser = async (userId: string) => {
    return await prisma.order.findMany({
        where: { userId },
        include: {
            items: true
        }
    })
}