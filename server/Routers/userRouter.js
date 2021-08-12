const userRouter = require("express").Router();
const userCotroller = require("../Controllers/userController");

userRouter.get('/',userCotroller.register)