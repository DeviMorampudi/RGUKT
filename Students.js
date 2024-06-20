const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' } // Default role is 'user'
});

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
