import { createUser, findUserByEmail } from "../repositories/user.repository";
import { hashPassword, comparePassword } from "../utils/password";
import { signAccessToken, signRefreshToken } from "../utils/jwt";

export const register = async (email: string, password: string) => {
  const hashedPassword = await hashPassword(password);

  const user = await createUser({
    email,
    password: hashedPassword,
  });

  return user;
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const match = await comparePassword(password, user.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  return {
    accessToken: signAccessToken({ sub: user.id, role: user.role }),
    refreshToken: signRefreshToken({ sub: user.id }),
  };
};
