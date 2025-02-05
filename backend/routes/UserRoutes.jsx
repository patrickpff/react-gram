const express = require("express")
const router = express.Router()

// Controller
const { 
    register, 
    login, 
    getCurrentUser,
    update
} = require("../controllers/UserController.jsx")

// Middlewares
const authGuard = require("../middlewares/authGuard.jsx")
const validate = require("../middlewares/handleValidation.jsx")
const { 
    userCreateValidation, 
    loginValidation, 
    userUpdateValidation
} = require("../middlewares/userValidations.jsx")

const { imageUpload } = require("../middlewares/imageUpload.jsx")

// Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)

module.exports = router
