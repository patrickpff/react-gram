const Photo = require("../models/Photo.jsx")
const User = require("../models/User.jsx")

const mongoose = require("mongoose")

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user
    const user = await User.findById(reqUser._id)

    // Create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    // If photo was created successfully, return data
    if (!newPhoto) {
        res.status(422).json({
            errors: ["There was a problem with your request. Please, try again later."]
        })
        return
    }

    res.status(200).json(newPhoto)
}

// Remove a photo from DB
const deletePhoto = async (req, res) => {
    const {id} = req.params

    const reqUser = req.user

    try {
        const photo = await Photo.findById(new mongoose.Types.ObjectId(id))

        // Check if photo exists
        if (!photo) {
            res.status(404).json({
                errors: ["Photo not found."]
            })
            return
        }

        // Check if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({
                errors: ["There was a problem with your request. Please, try again later."]
            })
        }

        await Photo.findByIdAndDelete(photo._id)

        res
            .status(200)
            .json({id: photo._id, message: "Photo removed successfully!"})
    } catch (error) {
        res.status(404).json({errors: ["Photo not found."]})
        return
    }
}

// Get all photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({})
        .sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

// Get user photos
const getUserPhotos = async (req, res) => {
    const {id} = req.params

    const photos = await Photo.find({userId: id})
        .sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

// Get photo by id
const getPhotoById = async (req, res) => {
    const {id} = req.params

    const photo = await Photo.findById(new mongoose.Types.ObjectId(id))

    // Check if photo exists
    if (!photo) {
        res.status(404).json({errors: ["Photo not found"]})
        return
    }

    res.status(200).json(photo)
}

// Update a photo
const updatePhoto = async (req, res) => {
    const {id} = req.params
    const {title} = req.body

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // Check if photo exists
    if (!photo) {
        res.status(404).json({errors: ["Photo not found"]})
        return
    }

    // Check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({errors: ["This photo does not belongs to you!"]})
        return
    }

    if (title) {
        photo.title = title
    }

    await photo.save()

    res.status(200).json({
        photo,
        message: "Your photo was updated sucessfully."
    })

}

// Like function
const likePhoto = async (req, res) => {
    const {id} = req.params

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // Check if photo exists
    if (!photo) {
        res.status(404).json({errors: ["Photo not found"]})
        return
    }

    // Check if user already liked the photo
    if(photo.likes.includes(reqUser._id)) {
        req.status(422).json({
            errors: ["You already liked this photo."]
        })
        return
    }

    // Put user id in likes array
    photo.likes.push(reqUser._id)

    await photo.save()

    res.status(200).json({
        photoId: id,
        userId: reqUser._id,
        message: "You liked this photo!"
    })

}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
}