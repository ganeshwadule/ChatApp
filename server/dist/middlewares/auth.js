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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // checking if cookies exist and do cookies have authToken
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.authToken;
        if (!token) {
            res.status(403).json({ error: "Unauthorized: No token provided" });
            return;
        }
        const user = jsonwebtoken_1.default.verify(req.cookies.authToken, process.env.JWT_SECRET);
        if (!user || !user.userId) {
            res.status(403).json("Unauthorized");
            return;
        }
        // putting userId into Custom Request Objects
        req.userId = user.userId;
        next();
    }
    catch (error) {
        res.status(500).json({ err: "Internal Server Error" });
        console.log(error);
    }
});
exports.default = auth;
