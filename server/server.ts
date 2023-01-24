import { config } from "dotenv";
import fastify from "fastify";
config();
const port = process.env.PORT || 5000;

const app = fastify();

app.listen(port, () => {
	console.log("Server listening on port: " + port);
});
