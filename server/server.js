import express from "express";
import { users } from "./data.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("/");
  return res.json({ msg: "hi" });
});

app.get("/users", (req, res) => {
  console.log("/user");
  return res.json({ data: users });
});

app.get("/user/:id", (req, res) => {
  console.log("/user/:id");
  return res.json({ data: users.find((i) => i?.id == req.params.id) });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
