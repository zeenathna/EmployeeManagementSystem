// models/employee.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema,'employee11');
module.exports = Employee;
