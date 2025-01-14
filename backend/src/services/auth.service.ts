import { UserModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthService {
	static async login(username: string, password: string) {
		const user = await UserModel.findOne({ userName: username });

		if (!user) {
			throw new Error("User not found");
		}

		if (!user.isActive) {
			throw new Error("User is not active");
		}

		const isPasswordValid = await bcrypt.compare(password, user.password || "");

		if (!isPasswordValid) {
			throw new Error("Invalid credentials");
		}

		const token = jwt.sign(
			{
				userId: user._id,
				username: user.userName,
			},
			process.env.JWT_SECRET || "valenin",
			{ expiresIn: "1h" }
		);

		return {
			token,
			user: {
				id: user._id,
				fullName: user.fullName,
				userName: user.userName,
			},
		};
	}
}
