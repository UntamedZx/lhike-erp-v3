import Fastify from "fastify";
import cors from "@fastify/cors";
import { connectToDatabase } from "./utils/database";
import { userRoutes } from "./routes/user.routes";
import { moduleRoutes } from "./routes/module.routes";
import { authRoutes } from "./routes/auth.routes";
import { jwtPlugin } from "./plugins/jwt";
import fastifyCookie from "fastify-cookie";

const app = Fastify();

// Register fastify-cors plugin
app.register(cors, {
	origin: "http://localhost:3001",
	methods: ["GET", "POST", "PUT", "DELETE"],
});

const start = async () => {
	try {
		await connectToDatabase();
		app.register(fastifyCookie);
		app.register(jwtPlugin);
		app.register(userRoutes);
		app.register(moduleRoutes);
		app.register(authRoutes);
		await app.listen({ port: parseInt(process.env.PORT || "3000") });
		console.log(`Server running on http://localhost:${process.env.PORT}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
