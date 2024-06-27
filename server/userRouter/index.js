const express = require("express");
const {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  updateUser,
} = require("./userController");

const userRouter = express.Router();

userRouter.route("/users").get(getAllUsers);
userRouter.route("/user").get(getOneUser);
userRouter.route("/user").post(addUser);
userRouter.route("/user/:id").put(editUser);
userRouter.route("/user/:id").patch(updateUser);

module.exports = userRouter;
