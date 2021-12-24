const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

const users = [
  {
    username: "john",
    password: "password123admin",
  },
];
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(400).send({ message: "Username or password incorrect" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
