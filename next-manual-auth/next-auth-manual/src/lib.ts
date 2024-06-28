import { SessionOptions } from "iron-session";

export interface SessionData {
  userName?: string;
  id?: number;
  password?: string;
  token?: string;
  isLoggedIn: boolean;
}


export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "forhad-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
