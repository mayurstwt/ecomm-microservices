import { Request, Response } from "express";
import * as service from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
  const product = await service.addProduct(req.body);
  res.status(201).json(product);
};

export const getProducts = async (_req: Request, res: Response) => {
  const products = await service.listProducts();
  res.json(products);
};
