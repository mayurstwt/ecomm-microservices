import express from "express";
import cartRoutes from "./routes/cart.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use("/cart", cartRoutes);
app.use(errorHandler);

export default app;