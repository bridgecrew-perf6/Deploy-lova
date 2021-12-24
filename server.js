const express = require("express");
const db = require("./models");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
dotenv.config();

const users = [
  {
    username: `${process.env.USER_NAME}`,
    password: `${process.env.PASSWORD}`,
  },
];

console.log(users);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const token = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({ token });
  } else {
    res.status(400).send({ message: "Username or password incorrect" });
  }
});

require("./routes/locations")(app);
require("./routes/cities")(app);
require("./routes/provinces")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
