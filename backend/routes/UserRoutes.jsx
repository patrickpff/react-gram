const express = require("express")
const router = express.Router()

// Controller
const { 
    register, 
    login 
} = require("../controllers/UserController.jsx")

// Middlewares
const validate = require("../middlewares/handleValidation.jsx")
const { 
    userCreateValidation, 
    loginValidation 
} = require("../middlewares/userValidations.jsx")

// Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)

module.exports = router
