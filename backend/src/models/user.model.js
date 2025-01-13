"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
