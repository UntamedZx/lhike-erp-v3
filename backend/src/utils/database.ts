import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const connectToDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(process.env.MONGO_URI || "");
	} catch (error) {
		console.error("Database connection failed:", error);
		process.exit(1);
	}
};
