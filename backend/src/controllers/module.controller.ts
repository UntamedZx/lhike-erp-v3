import { FastifyRequest, FastifyReply } from "fastify";
import { ModuleService } from "../services/module.services";

export class ModuleController {
	static async getAllModules(req: FastifyRequest, reply: FastifyReply) {
		try {
			const modules = await ModuleService.getAllModules();
			reply.send(modules);
		} catch (error) {
			reply.status(500).send({ message: error });
		}
	}
}
