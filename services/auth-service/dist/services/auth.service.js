"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_repository_1 = require("../repositories/user.repository");
const password_1 = require("../utils/password");
const jwt_1 = require("../utils/jwt");
const register = async (email, password) => {
    const hashedPassword = await (0, password_1.hashPassword)(password);
    const user = await (0, user_repository_1.createUser)({
        email,
        password: hashedPassword,
    });
    return user;
};
exports.register = register;
const login = async (email, password) => {
    const user = await (0, user_repository_1.findUserByEmail)(email);
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const match = await (0, password_1.comparePassword)(password, user.password);
    if (!match) {
        throw new Error("Invalid email or password");
    }
    return {
        accessToken: (0, jwt_1.signAccessToken)({ sub: user.id, role: user.role }),
        refreshToken: (0, jwt_1.signRefreshToken)({ sub: user.id }),
    };
};
exports.login = login;
