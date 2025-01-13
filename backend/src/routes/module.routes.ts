import { FastifyInstance } from "fastify";
import { ModuleController } from "../controllers/module.controller";

export async function moduleRoutes(fastify: FastifyInstance) {
	fastify.get("/modules", ModuleController.getAllModules);
}
