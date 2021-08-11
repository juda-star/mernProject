const studentModel =require("./studentController");
const bcryptjs= require("bcryptjs");

async function register() {
await studentModel.findOne({email:require.body.studentModel.email},(err,student)=>{
    if (student) {
        return res.status(400).json({email:"email already exists"});
    }
    
})
    
}