import { FastifyRequest, FastifyReply } from "fastify";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function verifyToken(req: FastifyRequest, reply: FastifyReply) {
	try {
		const token = req.cookies.authToken;

		if (!token) {
			return reply.status(401).send({ message: "Unauthorized" });
		}

		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded; // Attach user to request object
	} catch (error) {
		return reply.status(401).send({ message: "Unauthorized" });
	}
}
