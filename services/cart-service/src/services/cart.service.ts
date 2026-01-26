import axios from "axios";
import { env } from "../config/env";
import * as repo from '../repositories/cart.repository';

export const addToCart = async (
    userId: string,
    productId: string,
    quantity: number
) => {
    const {data: product} = await axios.get(
        `${env.PRODUCT_SERVICE_URL}/products`
    );

    const selected = product.find((p: any) => p.id === productId);
    if (!selected) {
        throw new Error("Product not found");
    }

    const cart = await repo.getCart(userId);

    const existing = cart.items.find(
        (item) => item.productId === productId
    )

    if(existing){
        existing.quantity += quantity
    }else {
        cart.items.push({
            productId,
            name: selected.name,
            price: selected.price,
            quantity
        })
    }

    await repo.saveCart(userId, cart);
    return cart;
}

export const getUserCart = async (userId: string) => {
    const cart = await repo.getCart(userId);
    return cart;
}
