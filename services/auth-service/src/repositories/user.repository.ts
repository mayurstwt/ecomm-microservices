import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    datasources: {
        authdb: {
            url: process.env.DATABASE_URL,
        },
    },
});

export const createUser = (data: any) => {
  return prisma.user.create({ data });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};
