import axios from "axios";
import * as repo from "../repositories/order.repository";
import { env } from "../config/env";

export const placeOrder = async (userId: string) => {
    const {data: cart} = await axios.get(
        `${env.CART_SERVICE_URL}/cart`,
        {
            headers: {
                "x-user-id": userId
            },
            timeout: 5000
        }
    )

    if(!cart || !cart.items || cart.items.length === 0){
        return {
            success: false,
            statusCode: 400,
            message: "Cart is empty. Cannot place order."
        }
    }


    const total = cart.items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity
    )

    return repo.createOrder({
        userId,
        total,
        items: cart.items
    })
}



export const listOrders = async (userId: string) => {
    return repo.getOrdersByUser(userId);
}