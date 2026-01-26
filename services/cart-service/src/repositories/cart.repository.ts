import Redis from "ioredis";
import { env } from "../config/env";
import { Cart } from "../types/cart.types";

if (!env.REDIS_URL) {
  throw new Error("REDIS_URL is not defined");
}
const redis = new Redis(env.REDIS_URL);
const CART_TTL = 60 * 60 * 24; // 24 hours

export const getCart = async (userId: string): Promise<Cart> => {
    const data = await redis.get(`cart:${userId}`);
    return data ? JSON.parse(data) : { items: [] };
}

export const saveCart = async (userId: string, cart: Cart) => {
    await redis.set(
        `cart:${userId}`,
        JSON.stringify(cart),
        "EX",
        CART_TTL
    )
}