import fastify from "fastify";
import { UserModel } from "../models/user.model";
import * as bcrypt from "bcrypt"; // Import bcrypt for password hashing
import * as dotenv from "dotenv";
import { connectToDatabase } from "../utils/database";
dotenv.config(); // Load environment variables

const app = fastify({ logger: true });

connectToDatabase();

// Create a specific admin user
const generateAdminUserData = async () => {
	const hashedPassword = await bcrypt.hash("admin@123", 10); // Hash the password with bcrypt
	return {
		empNo: "ADMIN123", // Fixed empNo for admin
		intId: "admin-uuid", // Fixed UUID for admin
		isActive: true,
		userName: "devadmin", // Specific admin username
		password: hashedPassword, // Hashed password
		fullName: "Admin", // Fixed full name for admin
		role: {
			"admin-role-uuid": ["read", "write", "delete"], // Admin roles
		},
		logisticToggle: {
			"admin-logistic-uuid": [0, 1, 2], // Example toggles
		},
		salesToggle: {
			"admin-sales-uuid": [0, 1, 2], // Example toggles
		},
		itemsToggle: {
			"admin-items-uuid": [0, 1, 2], // Example toggles
		},
		lastLogin: new Date(),
		acceptTerms: true,
		acceptTermsDate: new Date(),
		isIntern: false,
	};
};

// Seed Database
const seedDatabase = async () => {
	try {
		app.log.info("Seeding database with a single admin user...");
		const adminUser = await generateAdminUserData(); // Generate the admin user with hashed password
		await UserModel.create(adminUser); // Insert the admin user into the database
		app.log.info("Database seeded successfully with the admin user!");
	} catch (error) {
		app.log.error("Error seeding database:", error);
	}
};

// Start the App
const startApp = async () => {
	await connectToDatabase();
	await seedDatabase();
	process.exit(0);
};

// Run the Script
startApp().catch((error) => {
	app.log.error(error);
	process.exit(1);
});
