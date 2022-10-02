const express = require("express");
const userRouter = express.Router();
const { signup, signin, signout } = require("../controllers/index");

userRouter.post("/api/v1/users/signup", signup);
userRouter.post("/api/v1/users/signin", signin);

userRouter.post("/api/v1/users/signout", signout);


module.exports = userRouter;
