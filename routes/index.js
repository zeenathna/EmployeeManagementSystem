
const express = require('express');
const router = express.Router();
const employeeController = require('../controller/empcontroller.js'); // Adjust the path as per your folder structure

// Route to display all employees
router.get('/', employeeController.getAllEmployees);

//Route to show form for adding a new employee
router.get('/add', employeeController.getShowemployee);

/* Route to handle adding a new employee
router.post('/add', employeeController.addEmployee);*/

module.exports = router;



/* Display employees list
router.get('/', async (req, res) => {
   const employee = await empsys.find().populate('departments').exec();
   //const employee ="I am a dummy employee ! and I am working ";
    res.render('employee', { employee });
});

// Add employee form
router.get('/add', async (req, res) => {
    const departments = await Department.find();
    res.render('cemployee', { departments });
});

// Handle form submission to create a new employee
router.post('/add', async (req, res) => {
    const { firstName, lastName, department } = req.body;
    const newEmployee = new Employee({
        firstName,
        lastName,
        departments: department
    });
    await newEmployee.save();
    res.redirect('/');
});

// Seed departments into the database (for testing)
router.get('/seed', async (req, res) => {
    const departments = [
        { name: 'General Dentistry' },
        { name: 'Pediatric Dentistry' },
        { name: 'Restorative Dentistry' },
        { name: 'Surgery' },
        { name: 'Orthodontics' }
    ];
    await Department.insertMany(departments);
    res.send('Departments seeded successfully');
});

module.exports = router;
*/