const User = require('../models/User.jsx')

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const jwtSecret = process.env.JWT_SECRET

// Generate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    })
}

// Register user and sign in
const register = async (req, res) => {
    
    const {name, email, password} = req.body

    // check if user exists
    const user = await User.findOne({email})

    if (user) {
        res.status(422).json({errors: ["The email address is already in use"]})
        return
    }

    // Generate password hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // If user was created successfully, return the token
    if (!newUser) {
        res.status(422).json({errors: ["An error ocurred. Please, try again later."]})
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser.id)
    })
}

// login
const login = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    // Check if user exists
    if (!user) {
        res.status(404).json({errors: ["User not found."]})
        return
    }

    // Check if password matches
    if(!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["Invalid password"]})
        return
    }

    // return user with token
    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user.id)
    })
}

// Get current user
const getCurrentUser = async (req, res) => {
    const user = req.user

    res.status(200).json(user)
}

// Update an user
const update = async (req, res) => {
    const {name, password, bio} = req.body

    let profileImage = null

    if (req.file) {
        profileImage = req.file.filename
    }

    const reqUser = req.user
    const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select("-password")

    if (name) {
        user.name = name
    }

    if (password) {
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        
        user.password = passwordHash
    }

    if (profileImage) {
        user.profileImage = profileImage
    }

    if (bio) {
        user.bio = bio
    }

    await user.save()

    res.status(200).json(user)
}

// Get user by Id
const getUserById = async (req, res) => {
    const {id} = req.params

    try {
        const user = await User.findById(new mongoose.Types.ObjectId(id)).select('-password')

        // Check if user exists
        if (!user) {
            res.status(404).json({errors: ["User not found."]})
            return
        }
    
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({errors: ["User not found."]})
        return
    }
}

module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserById,
}