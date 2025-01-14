import { Schema, model, Document } from "mongoose";

export interface IUserRole {
	[moduleId: string]: string[];
}

export interface IUser extends Document {
	empNo?: string | null;
	intId?: string | null;
	isActive: boolean;
	userName?: string | null;
	password?: string | null;
	fullName: string;
	role: IUserRole;
	logisticToggle: Record<string, number[]>;
	salesToggle: Record<string, number[]>;
	itemsToggle: Record<string, number[]>;
	lastLogin?: Date | null;
	acceptTerms: boolean;
	acceptTermsDate?: Date | null;
	isIntern?: boolean | null;
}

const UserSchema = new Schema<IUser>(
	{
		empNo: { type: String, maxlength: 20, default: null },
		intId: { type: String, default: null },
		isActive: { type: Boolean, default: false },
		userName: { type: String, maxlength: 150, default: null },
		password: { type: String, maxlength: 150, default: null },
		fullName: { type: String, maxlength: 120, required: true },
		role: { type: Object, default: {} },
		logisticToggle: { type: Object, default: {} },
		salesToggle: { type: Object, default: {} },
		itemsToggle: { type: Object, default: {} },
		lastLogin: { type: Date, default: null },
		acceptTerms: { type: Boolean, default: false },
		acceptTermsDate: { type: Date, default: null },
		isIntern: { type: Boolean, default: null },
	},
	{
		timestamps: true,
	}
);

export const UserModel = model<IUser>("User", UserSchema);
