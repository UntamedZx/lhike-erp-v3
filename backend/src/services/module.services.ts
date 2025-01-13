import { ModuleModel } from "../models/module.model";

export class ModuleService {
	static async getAllModules() {
		try {
			const modules = await ModuleModel.find({ active: true }).lean();
			return modules;
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(`Error fetching modules: ${error.message}`);
			} else {
				throw new Error("Unknown error ocurred");
			}
		}
	}
}
