require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body-parser for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static files and EJS templating engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));  

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);
app.use('/add',indexRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

