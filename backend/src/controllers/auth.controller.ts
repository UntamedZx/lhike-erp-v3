import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/auth.service";

interface LoginBody {
	username: string;
	password: string;
}

export class AuthController {
	static async loginHandler(
		req: FastifyRequest<{ Body: LoginBody }>,
		reply: FastifyReply
	) {
		const { username, password } = req.body;

		try {
			const result = await AuthService.login(username, password);
			reply.send(result);
		} catch (error) {
			reply
				.status(401)
				.send({
					message: error instanceof Error ? error.message : "Unauthorized",
				});
		}
	}
}
