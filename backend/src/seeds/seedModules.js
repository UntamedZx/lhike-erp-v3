"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var user_model_1 = require("../models/user.model");
var jwt = require("jsonwebtoken"); // Fixed import
var faker_1 = require("@faker-js/faker");
var database_1 = require("../utils/database");
var dotenv = require("dotenv");
dotenv.config(); // Huwag kalimutan itong idagdag para ma-load ang environment variables
var JWT_SECRET = process.env.JWT_SECRET || "valenin";
var app = (0, fastify_1.default)({ logger: true });
(0, database_1.connectToDatabase)();
var generateUserData = function () {
    var _a, _b, _c, _d;
    var _e;
    return {
        empNo: faker_1.faker.string.alphanumeric(10), // Fixed faker.string.alphaNumeric
        intId: faker_1.faker.string.uuid(), // Fixed faker.string.uuid
        isActive: faker_1.faker.datatype.boolean(),
        userName: faker_1.faker.internet.userName(),
        password: jwt.sign({ password: (_e = faker_1.faker.internet.password()) !== null && _e !== void 0 ? _e : "defaultPassword" }, JWT_SECRET), // Fixed undefined fallback
        fullName: faker_1.faker.person.fullName(),
        role: (_a = {},
            _a[faker_1.faker.string.uuid()] = faker_1.faker.helpers.arrayElements(["read", "write", "delete"], 2),
            _a),
        logisticToggle: (_b = {},
            _b[faker_1.faker.string.uuid()] = faker_1.faker.helpers.arrayElements([0, 1, 2], 3),
            _b),
        salesToggle: (_c = {},
            _c[faker_1.faker.string.uuid()] = faker_1.faker.helpers.arrayElements([0, 1, 2], 3),
            _c),
        itemsToggle: (_d = {},
            _d[faker_1.faker.string.uuid()] = faker_1.faker.helpers.arrayElements([0, 1, 2], 3),
            _d),
        lastLogin: faker_1.faker.date.past(),
        acceptTerms: faker_1.faker.datatype.boolean(),
        acceptTermsDate: faker_1.faker.datatype.boolean() ? faker_1.faker.date.past() : null,
        isIntern: faker_1.faker.datatype.boolean(),
    };
};
// Seed Database
var seedDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                app.log.info("Seeding database...");
                users = Array.from({ length: 100 }, generateUserData);
                return [4 /*yield*/, user_model_1.UserModel.insertMany(users)];
            case 1:
                _a.sent();
                app.log.info("Database seeded successfully with 100 users!");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                app.log.error("Error seeding database:", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Start the App
var startApp = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.connectToDatabase)()];
            case 1:
                _a.sent();
                return [4 /*yield*/, seedDatabase()];
            case 2:
                _a.sent();
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); };
// Run the Script
startApp().catch(function (error) {
    app.log.error(error);
    process.exit(1);
});
