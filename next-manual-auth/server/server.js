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

app.post("/login", (req, res) => {
  let user = users.find((item) => item?.userName === req.body.userName);
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "User not found", data: null });
  }
  return res.json({
    data: { ...user, token: user?.id },
    success: true,
    message: "user found",
  });
});

app.get("/users", (req, res) => {
  console.log("/user");
  return res.json({ data: users });
});

app.get("/user/:id", (req, res) => {
  console.log("/user/:id");
  return res.json({ data: users.find((i) => i?.id == req.params.id) });
});

app.get("/user", (req, res) => {
  let userId = req.headers.authorization;
  return res.json({ data: users.find((i) => i?.id == userId) });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
