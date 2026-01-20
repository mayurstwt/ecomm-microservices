"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        authdb: {
            url: process.env.DATABASE_URL,
        },
    },
});
const createUser = (data) => {
    return prisma.user.create({ data });
};
exports.createUser = createUser;
const findUserByEmail = (email) => {
    return prisma.user.findUnique({ where: { email } });
};
exports.findUserByEmail = findUserByEmail;
