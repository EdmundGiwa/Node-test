const mongoose = require("mongoose")
const UseSchema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("users", UseSchema)