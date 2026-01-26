import { Router } from "express";
import * as controller from "../controllers/cart.controller";

const router = Router();

router.post("/add", controller.addItem);
router.get("/", controller.getCart);

export default router;