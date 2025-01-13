import fastify from "fastify";
import { UserModel } from "../models/user.model";
import * as jwt from "jsonwebtoken"; // Fixed import
import { faker } from "@faker-js/faker";
import { connectToDatabase } from "../utils/database";
import * as dotenv from "dotenv";
dotenv.config(); // Huwag kalimutan itong idagdag para ma-load ang environment variables

const JWT_SECRET = process.env.JWT_SECRET || "valenin";

const app = fastify({ logger: true });

connectToDatabase();

const generateUserData = () => {
	return {
		empNo: faker.string.alphanumeric(10), // Fixed faker.string.alphaNumeric
		intId: faker.string.uuid(), // Fixed faker.string.uuid
		isActive: faker.datatype.boolean(),
		userName: faker.internet.username(), // Palitan ang userName sa username
		password: jwt.sign(
			{ password: faker.internet.password() ?? "defaultPassword" },
			JWT_SECRET
		), // Fixed undefined fallback
		fullName: faker.person.fullName(),
		role: {
			[faker.string.uuid()]: faker.helpers.arrayElements(
				["read", "write", "delete"],
				2
			),
		},
		logisticToggle: {
			[faker.string.uuid()]: faker.helpers.arrayElements([0, 1, 2], 3),
		},
		salesToggle: {
			[faker.string.uuid()]: faker.helpers.arrayElements([0, 1, 2], 3),
		},
		itemsToggle: {
			[faker.string.uuid()]: faker.helpers.arrayElements([0, 1, 2], 3),
		},
		lastLogin: faker.date.past(),
		acceptTerms: faker.datatype.boolean(),
		acceptTermsDate: faker.datatype.boolean() ? faker.date.past() : null,
		isIntern: faker.datatype.boolean(),
	};
};

// Seed Database
const seedDatabase = async () => {
	try {
		app.log.info("Seeding database...");
		const users = Array.from({ length: 100 }, generateUserData);
		await UserModel.insertMany(users);
		app.log.info("Database seeded successfully with 100 users!");
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
