import { config } from "dotenv";
import { userRoutes } from "./routes/users";
import fastify from "fastify";
import cors from "@fastify/cors";
config();
const port = process.env.PORT || 5000;
const app = fastify();

app.register(cors, { origin: process.env.CLIENT_URL });
app.register(userRoutes);

app.listen(port, () => {
	console.log("Server listening on port: " + port);
});
