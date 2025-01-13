import { UserModel } from "../models/user.model";
import { ModuleModel } from "../models/module.model";

export class UserService {
	static async getUserPermissions(userId: string) {
		try {
			const user = await UserModel.findById(userId).lean();

			if (!user) {
				throw new Error("User not found");
			}

			const modules = await ModuleModel.find({ active: true }).lean();

			const userPermissions = modules.map((module) => {
				const actions: string[] = Array.isArray(module.action)
					? module.action
					: [module.action];
				return {
					name: module.name,
					methods: [
						{
							method: module.method,
							actions: actions.filter((action: string) =>
								user.role[module.id]?.includes(action)
							),
						},
					],
				};
			});

			return userPermissions;
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(`Error fetching user permissions: ${error.message}`);
			} else {
				throw new Error("Unknown error occurred");
			}
		}
	}

	static async updateUserPermissions(userId: string, role: object) {
		try {
			const updateUser = await UserModel.findByIdAndUpdate(
				userId,
				{ role },
				{ new: true }
			);

			if (!updateUser) {
				throw new Error("User not found");
			}

			return updateUser;
		} catch (error: unknown) {
			if (error instanceof Error) {
				// Type assertion to handle the error object as an instance of Error
				throw new Error(`Error fetching user permissions: ${error.message}`);
			} else {
				throw new Error("Unknown error occurred");
			}
		}
	}

	static async getAllUser(page: number, pageSize: number, search: string) {
		try {
			const query: Record<string, any> = {};

			if (search) {
				const regexSearch = new RegExp(search, "i");
				query.$or = [
					{ empNo: { $regex: regexSearch } },
					{ userName: { $regex: regexSearch } },
					{ fullName: { $regex: regexSearch } },
				];
				console.log("Search query:", query);

				const users = await UserModel.find(query);

				console.log("Fetched Users:", users);

				return {
					data: users.map((user) => ({
						_id: user._id,
						fullName: user.fullName,
						userName: user.userName,
						isActive: user.isActive,
					})),
					pagination: {
						total_records: users.length,
						current_page: 1,
						total_pages: 1,
						next_page: null,
						prev_page: null,
					},
				};
			} else {
				const users = await UserModel.find(query)
					.skip((page - 1) * pageSize)
					.limit(pageSize);

				console.log("Fetched Users:", users);

				const totalUsers = await UserModel.countDocuments(query);

				return {
					data: users.map((user) => ({
						_id: user._id,
						fullName: user.fullName,
						userName: user.userName,
						isActive: user.isActive,
					})),
					pagination: {
						total_records: totalUsers,
						current_page: page,
						total_pages: Math.ceil(totalUsers / pageSize),
						next_page:
							page < Math.ceil(totalUsers / pageSize) ? page + 1 : null,
						prev_page: page > 1 ? page - 1 : null,
					},
				};
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(`Error fetching user permissions: ${error.message}`);
			} else {
				throw new Error("Unknown error occurred");
			}
		}
	}
}
