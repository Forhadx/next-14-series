import express from "express";
import { users } from "./data.js";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  return res.json({ data: users });
});

app.get("/user/:id", (req, res) => {
  return res.json({ data: users.find((i) => i?.id == req.params.id) });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
