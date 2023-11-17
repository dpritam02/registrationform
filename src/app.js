const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const script  = require("../frontend/Script.js");
// const User = require('./models/registers');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
// const User = require("./models/registers");

// app.use(cors());
//connect the frontend with backend
const static_path = path.join(__dirname,"../frontend")
app.use(express.static(static_path)); 
app.set("view engine", static_path);


// // Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registrationform', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Define a mongoose schema for user registration
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword : String 
});
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, client-side JS)
app.use(express.static('public'));

//getting fucntion
app.get("/register",(req,res)=>{
    res.render("index");
})

// Handle registration form submission
app.post('/register', async (req, res) => {

    const password = req.body.password;
    const cpassword = req.body.confirmPassword;
    if(password == cpassword){   
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmPassword : req.body.confirmPassword
        });
        const registered = await newUser.save();
        res.status(201).render("index");
    }else{
        res.send("pasword are not matching");
    }

    newUser.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving to database');
        } else {
            res.status(200).send('Registration successful');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
