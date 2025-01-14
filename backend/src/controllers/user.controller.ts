import { FastifyRequest, FastifyReply } from "fastify";
import { UserService } from "../services/user.services";

interface UserParams {
	userId: string;
}

interface UpdateRoleBody {
	role: Record<string, any>;
}

interface UserQuery {
  page?: string;
  pageSize?: string;
  search?: string;
}

export class UserController {
	static async getUserPermissions(
		req: FastifyRequest<{ Params: UserParams }>,
		reply: FastifyReply
	) {
		const { userId } = req.params as { userId: string };

		try {
			const userPermissions = await UserService.getUserPermissions(userId);

			if (!userPermissions) {
				return reply.status(404).send({ message: "User not found" });
			}

			reply.send(userPermissions);
		} catch (error) {
			reply.status(500).send({ message: error });
		}
	}

	static async updateUserPermissions(
		req: FastifyRequest<{ Params: UserParams; Body: UpdateRoleBody }>,
		reply: FastifyReply
	) {
		const { userId } = req.params as { userId: string };
		const { role } = req.body;

		try {
			const updateUser = await UserService.updateUserPermissions(userId, role);
			reply.send(updateUser);
		} catch (error) {
			reply.status(500).send({ message: error });
		}
	}

	static async getAllUsers(req: FastifyRequest<{Querystring: UserQuery}>, reply: FastifyReply) {
		try {
			const page = parseInt(req.query.page as string) || 1;
			const pageSize = parseInt(req.query.pageSize as string) || 10;
			const search = (req.query.search as string) || "";

			const result = await UserService.getAllUser(page, pageSize, search);
			reply.send(result);
		} catch (error) {
			reply.status(500).send({ message: error });
		}
	}
}
