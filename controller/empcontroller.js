
const Employee = require('../models/employee1');

// Controller to fetch and display all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find(); // Fetch all employees from the database
        res.render('employee', { employees }); // Pass the employee data to the view
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.getShowemployee = async (req, res) => {
    try {
        res.render('showEmployeeForm');
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).send('Internal Server Error');
    }
};
/*
exports.AddEmployee('/add', async (req, res) => {
    try {
        const { Name, salary } = req.body; // Extract data from the request body
        const newEmployee = new Employee({ Name: fristName, salary }); // Create a new Employee instance
        await newEmployee.save(); // Save the new employee to the database
        res.redirect('/'); // Redirect to the employee list page after successful submission
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).send('Internal Server Error');
    }
});*/