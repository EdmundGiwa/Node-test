const userSchema = require("../../model/userSchema");

const homePage = async (req, res) => {

    console.log(res.status(200).json({ message: "hello" }));


}
const addUser = async (req, res) => {
    try {
        // Retrieve all users from MongoDB
        let { username, password } = req.body
        const saveUser = await new userSchema({
            username, password
        }).save()
        if (saveUser) {
            res.status(201).json({ user: saveUser })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}
const getUsers = async (req, res) => {
    try {
        // Retrieve all users from MongoDB
        console.log('123');

        const users = await userSchema.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}
const signinUser = async (req, res) => {
    try {
        let { username } = req.body
        // Retrieve all users from MongoDB
        console.log('123');

        const users = await userSchema.findOne({ username });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}


// // Route to handle user sign-in
// app.post('/signin', async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Save user data to MongoDB
//         const user = new User({ username, password });
//         await user.save();

//         res.status(201).json({ message: 'User signed in successfully.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error.' });
//     }
// });

// // Route to get all user sign-in details
// app.get('/users', async (req, res) => {
//     try {
//         // Retrieve all users from MongoDB
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error.' });
//     }
// });
module.exports = {
    getUsers,
    signinUser,
    addUser,
    homePage
}