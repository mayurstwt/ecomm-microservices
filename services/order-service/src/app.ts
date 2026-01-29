import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import orderRoutes from "./routes/order.routes"

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use("/orders", orderRoutes);


export default app;