import * as repo from "../repositories/product.repository";

export const addProduct = async (data: any) => {
    return await repo.createProduct(data)
    
}

export const listProducts = async () => {
    return await repo.getAllProducts()
}