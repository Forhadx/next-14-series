import jwt from "jsonwebtoken";

export function authMiddleware(req: Request): any {
  if (!req.headers.get("authorization")) {
    return null;
  }

  const token = req.headers.get("authorization")?.replace(/^Bearer\s/, "");
  if (!token) {
    return null;
  }

  let result = null;
  try {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET!,
      (err: any, decoded: any) => {
        if (err) {
          return null;
        } else {
          result = decoded.data;
        }
      }
    );
  } catch (err) {
    // console.log("jwt error", err);
  }
  return result;
}
