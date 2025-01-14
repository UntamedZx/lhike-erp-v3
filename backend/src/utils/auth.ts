import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "valenin";

export const authenticateToken = async (request: any, reply: any) => {
	try {
		const authHeader = request.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			reply.status(401).send({ message: "Unauthorized: No token provided" });
			return;
		}

		const token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, JWT_SECRET);
		request.user = decoded;
	} catch (error) {
		reply.status(401).send({ message: "Unauthorized: Invalid token" });
	}
};
