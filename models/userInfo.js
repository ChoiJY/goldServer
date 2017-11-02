// mongodb schema
var mongoose = require('mongoose');

// user account informations
var schema = mongoose.Schema({
    name : {type: String, required: true},
    studentID : {type: Number, required: true, unique: true},
    grade : {type:Number, required: true},
    major : {type:String, required: true},
    semester : {type:Number, required: true}
    // toeic : Number,
    // opic : String,
    // tsp : String
    // profilePicture
});

var Student = mongoose.model('Student', schema);

// collection name is students
module.exports = Student;