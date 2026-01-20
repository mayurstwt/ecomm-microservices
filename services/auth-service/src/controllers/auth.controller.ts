import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = await authService.register(email, password);
    res.status(201).json(user);
}

export const login = async (req: Request, res: Response) => {
    const tokens = await authService.login(
        req.body.email,
        req.body.password
    )

    res.status(200).json(tokens);
}
