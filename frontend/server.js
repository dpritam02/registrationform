// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/registrationform', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
// });

// // Define a mongoose schema for user registration
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// // Middleware to parse JSON
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (e.g., HTML, CSS, client-side JS)
// app.use(express.static('public'));

// // Handle registration form submission
// app.post('/register', (req, res) => {
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     });

//     newUser.save((err) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error saving to database');
//         } else {
//             res.status(200).send('Registration successful');
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
