const express = require("express")
const { homePage, getUsers, addUser, signinUser } = require("../controller/user/UserController")
const router = express.Router()
router.get("/", homePage)
router.get("/users", getUsers)
router.post("/users/create", addUser)
router.post("/users/login", signinUser)


module.exports = router