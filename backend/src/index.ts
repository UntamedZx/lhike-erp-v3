import Fastify from "fastify";
import fastifyCors from "fastify-cors";
import { connectToDatabase } from "./utils/database";
import { userRoutes } from "./routes/user.routes";
import { moduleRoutes } from "./routes/module.routes";

const app = Fastify();

// Register fastify-cors plugin
app.register(fastifyCors, {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
});

const start = async () => {
	try {
		await connectToDatabase();
		app.register(userRoutes);
		app.register(moduleRoutes);
		await app.listen({ port: parseInt(process.env.PORT || "3000") });
		console.log(`Server running on http://localhost:${process.env.PORT}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
