import { Request, Response } from "express";
import * as service from "../services/order.service";


export const createOrder = async (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const order = await service.placeOrder(userId);
    res.status(200).json(order);
}


export const getOrders = async (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const orders = await service.listOrders(userId);
    res.status(200).json(orders);
}