// models/department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
