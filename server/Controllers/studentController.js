const studentModel = require("../Models/studentModels");
const { ObjectId } = require("mongodb");

const studentValidate = require("../validator/studentsValidation");
/////////////////getAll////////////////////////////////
async function getAllStudent(req, res) {
  try {
    await studentModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ massage: "success", data: result });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
/////////////////////////////get by id ///////////////////////////
async function getStudentById(req, res) {
  try {
    await studentModel.findById(
      { _id: ObjectId(req.params._id) },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "succses", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
/////////////////////////////add////////////////////////////////
async function createNewStudent(req, res) {
  const { errors, isValid } = studentValidate(req.body.student);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    await studentModel.insertMany(req.body.students, (error, result) => {
      if (error) throw error;
      res.json({
        massage: "success, added successfully",
        data: req.body.students,
      });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
///////insert into database/////////////////////////////////////

///////////////////////delete//////////////////////////////

async function deleteStudent(req, res) {
  try {
    await studentModel.findOneAndDelete(
      { _id: ObjectId(req.params._id) },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "Success", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
/////////////////////////////update/////////////////////////

async function updateStudent(req, res) {
  try {
    studentModel.findByIdAndUpdate(
      { _id: ObjectId(req.params._id) },
      { $set: req.body.student },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "Success", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
////////////////////update///////////////////////////////

module.exports = {
  getAllStudent,
  createNewStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
};
