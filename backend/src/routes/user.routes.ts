import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller";

export async function userRoutes(fastify: FastifyInstance) {
	fastify.get("/user-permission/:userId", UserController.getUserPermissions);
	fastify.put("/user-permission/:userId", UserController.updateUserPermissions);
  fastify.get('/users', UserController.getAllUsers);
}
