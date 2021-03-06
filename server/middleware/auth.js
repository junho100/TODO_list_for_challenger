import jwt from "jsonwebtoken";
import config from "../config.js";

export function isAuth(req, res, next) {
  const tokenHeader = req.get("Authorization");
  if (!(tokenHeader && tokenHeader.startsWith("Bearer "))) {
    return res.status(401).send("Auth Error");
  }

  const token = tokenHeader.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Auth Error");
  }
  return jwt.verify(token, config.auth.secKey, (err, decoded) => {
    if (err) {
      console.log(err);
      res.status(401).send(err);
    }
    req.username = decoded.username;
    next();
  });
}
