import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT!,
  CART_SERVICE_URL: process.env.CART_SERVICE_URL!
};
