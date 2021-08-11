const studentModel =require("./studentController");
const bcryptjs= require("bcryptjs");

async function register() {
await studentModel.findOne({email:require.body.studentModel.email},(err,student)=>{
    if (student) {
        return res.status(400).json({email:"email already exists"});
    }
    else{
        bcryptjs.genSalt(10,(err,salt)=>{
            bcryptjs.hash(req.body.student.password,salt,(err,hash)=>{
                if (err) throw err;
                req.body.student.password=hash;
                studentModel.insertMany(req.body.student,(err)=>{
                    if (err) {
                        return res.status(400).json({success:false,error:err})
                    };
                    res.status(201).json({success:true,massage:`registered of ${req.body.student} is confirmed`})
                })
                    
                
            })
        })
    }
})
    
}