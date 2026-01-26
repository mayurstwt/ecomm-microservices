import dotenv from "dotenv";

dotenv.config();

export const env = {
PORT: process.env.PORT,
REDIS_URL: process.env.REDIS_URL,
PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL
}