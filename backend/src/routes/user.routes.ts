import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller";
import { authenticateToken } from "../utils/auth";

export async function userRoutes(fastify: FastifyInstance) {
	fastify.get(
		"/user-permission/:userId",
		{ preHandler: authenticateToken },
		UserController.getUserPermissions
	);
	fastify.put(
		"/user-permission/:userId",
		{ preHandler: authenticateToken },
		UserController.updateUserPermissions
	);
	fastify.get(
		"/users",
		{ preHandler: authenticateToken },
		UserController.getAllUsers
	);
}
