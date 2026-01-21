import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`Product service running on ${env.PORT}`);
});
