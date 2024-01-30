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
// const UserRouter = "./routes/UserRoute"
const app = express();
app.use(cors()); // Enable CORS
const PORT = process.env.PORT || 3002;

const uri = "mongodb+srv://edmundgiwajr:<password>@cluster0.mh5vmou.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect("mongodb+srv://edmundgiwajr:0814239225five@cluster0.mh5vmou.mongodb.net/?retryWrites=true&w=majority",);

// Create a mongoose schema for user data
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Create a mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))




app.use("/", require("./routes/UserRoute"))
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});