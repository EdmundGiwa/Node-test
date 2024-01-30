// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = process.env.PORT || 3000;

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());

// // const transporter = nodemailer.createTransport({
// //     // Your nodemailer configuration (see previous response)
// // });

// // app.post('/send-email', (req, res) => {
// //     // Handle sending emails (see previous response)
// // });

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose')
// // const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors()); // Enable CORS
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'b59598204@gmail.com', // replace with your Gmail email
//         pass: 'BongoPassword2$' // replace with your Gmail password
//     }
// });

// app.post('/send-email', (req, res) => {
//     const { to, subject, text } = req.body;

//     const mailOptions = {
//         from: 'b59598204@gmail.com', // replace with your Gmail email
//         to,
//         subject,
//         text
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });
//         }
//         res.status(200).json({ message: 'Email sent successfully!', info });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`); 
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();

const allowedOrigins = ['https://node-test-psi-seven.vercel.app'];

// Enable CORS only for the specified origins
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
}));

const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://edmundgiwajr:<password>@cluster0.mh5vmou.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect("mongodb+srv://edmundgiwajr:0814239225five@cluster0.mh5vmou.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

// Create a mongoose schema for user data
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Create a mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(bodyParser.json());
// app.use(cors()); // Enable CORS

// Route to handle user sign-in
app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Save user data to MongoDB
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: 'User signed in successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Route to get all user sign-in details
app.get('/users', async (req, res) => {
    try {
        // Retrieve all users from MongoDB
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});