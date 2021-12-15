import jwt from "jsonwebtoken";
import config from "../config.js";

export function isAuth(req, res, next) {
  const tokenHeader = req.get("Authorization");
  if (!(tokenHeader && tokenHeader.startsWith("Bearer "))) {
    return res.status(401).send("Auth Error");
  }

  const token = tokenHeader.split(" ")[1];
  jwt.verify(token, config.auth.secKey, (err, decoded) => {});
}
