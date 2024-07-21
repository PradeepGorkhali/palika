const mongoose = require("mongoose")
const validator = require("validator")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    district:{
        type: String,
        required:true,
    },
    municipality:{
        type: String,
        required: true,
    },
    ward:{
        type:String,
        required: true,
    },
    sakchi: {
        type: String,
        required: true,
    },

        
    }
)
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;