const studentRouter = require("express").Router();
const studentCotroller = require("../Controllers/studentController");

studentRouter.get("/", studentCotroller.getAllStudent);
studentRouter.post("/", studentCotroller.createNewStudent);
studentRouter.delete("/:_id", studentCotroller.deleteStudent);
studentRouter.put("/:_id", studentCotroller.updateStudent);

module.exports = studentRouter;
