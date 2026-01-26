import { Request, Response } from "express";
import * as service from "../services/cart.service";

export const addItem = async (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const { productId, quantity } = req.body;

    const cart = await service.addToCart(
        userId,
        productId,
        quantity
    );

    res.status(200).json(cart);
}

export const getCart = async (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const cart = await service.getUserCart(userId);
    res.status(200).json(cart);
}