const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const bcrypt = require("bcryptjs");
const e = require("express");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("site is in maintainance mode");
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const myfunction = async () => {
//   const password = "saad123@!";
//   const hashedpassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedpassword);

//   const isMatch = await bcrypt.compare('saad123@!' , hashedpassword)
//   console.log(isMatch)
// };
// myfunction();

// const jwt = require("jsonwebtoken");
// const myfunc = () => {
//   const token = jwt.sign({ _id: "abc_123" }, "thisismysecret", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismysecret");
//   console.log(data);
// };
// myfunc();

app.listen(port, () => {
  console.log("server is running " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("60985784cae09d31801af756");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
