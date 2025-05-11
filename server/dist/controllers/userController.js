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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validating schema using Zod
        const requiredSchema = zod_1.z.object({
            username: zod_1.z
                .string()
                .min(3, "Username should be atleast of 3 chars")
                .max(100, "Username should be at most of 10 chars"),
            password: zod_1.z
                .string()
                .min(8, { message: "Password must be at least 8 characters long." })
                .max(100, {
                message: "Password must not be at most 100 characters long.",
            })
                .regex(/[A-Z]/, {
                message: "Password must contain at least one uppercase letter.",
            })
                .regex(/[^A-Za-z0-9]/, {
                message: "Password must contain at least one special character.",
            }),
        });
        const { success, data, error } = requiredSchema.safeParse(req.body);
        if (!success) {
            // console.log(error)
            res.json({ message: error.issues[0].message });
            return;
        }
        // Destructuring data from Parsed Data object
        const { username, password } = data;
        // hashing the password with Salt
        const hashedPassword = yield bcrypt_1.default.hash(password, 5);
        // Checking if user has exists already
        const user = yield User_1.default.findOne({ username });
        if (user) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        // Creating user in Database
        yield User_1.default.create({ username, password: hashedPassword });
        res.status(201).json({ message: "User created successfully" });
    }
    catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validating schema using Zod
        console.log("request came");
        const requiredSchema = zod_1.z.object({
            username: zod_1.z
                .string()
                .min(3, "Username should be atleast of 3 chars")
                .max(100, "Username should be at most of 10 chars"),
            password: zod_1.z
                .string()
                .min(8, { message: "Password must be at least 8 characters long." })
                .max(100, {
                message: "Password must not be at most 100 characters long.",
            })
                .regex(/[A-Z]/, {
                message: "Password must contain at least one uppercase letter.",
            })
                .regex(/[^A-Za-z0-9]/, {
                message: "Password must contain at least one special character.",
            }),
        });
        const { success, data, error } = requiredSchema.safeParse(req.body);
        if (!success) {
            res.json(error.issues[0].message);
            return;
        }
        // Destructuring data from Parsed Data object
        const { username, password } = data;
        // Checking if user  exists
        const user = yield User_1.default.findOne({ username });
        if (!user) {
            res.status(404).json({ message: "User doensn't exists" });
            return;
        }
        // checking for pass using bcrypt
        const passMatch = bcrypt_1.default.compare(password, user.password);
        if (!passMatch) {
            res.status(400).json("Wrong Password");
            return;
        }
        // creating token using JWT
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie("authToken", token, {
            httpOnly: false, // Prevents JavaScript access for security
            secure: false,
            sameSite: "lax", // Must be true for HTTPS // Required for cross-origin requests // shou;d be None in production
            path: "/"
        });
        res.status(201).json({ token: token, message: "User signed in" });
    }
    catch (err) {
        console.error("SignIn error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
const userInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached here");
    const { userId } = req;
    console.log(userId);
    const user = yield User_1.default.findById(userId);
    res.status(200).json(user);
});
exports.default = { signup, signin, userInfo };
