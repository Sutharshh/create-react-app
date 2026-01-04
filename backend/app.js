const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mongo:27017/devopsdb");

const User = mongoose.model("User", { name: String });

app.post("/users", async (req, res) => {
  await User.create({ name: req.body.name });
  res.send("User Added");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
