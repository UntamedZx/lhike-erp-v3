import { Schema, model, Document } from "mongoose";

export interface IModule extends Document {
	name: string;
	method: string;
	action: string;
	active: boolean;
}

const ModuleSchema = new Schema<IModule>({
	name: { type: String, required: true },
	method: { type: String, required: true },
	action: { type: String, required: true },
	active: { type: Boolean, required: true },
});

export const ModuleModel = model<IModule>("Module", ModuleSchema);
