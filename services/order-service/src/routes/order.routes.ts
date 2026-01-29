import { Router } from "express";
import * as controller from "../controllers/order.controller";

const router = Router();

router.post("/", controller.createOrder);
router.get("/", controller.getOrders);

export default router;