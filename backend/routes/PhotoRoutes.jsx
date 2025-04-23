const express = require("express")
const router = express.Router()

// Controller
const { 
    insertPhoto, 
    deletePhoto, 
    getAllPhotos, 
    getUserPhotos 
} = require("../controllers/PhotoController.jsx")

// Middlewares
const {photoInsertValidation} = require("../middlewares/photoValidation.jsx")
const authGuard = require("../middlewares/authGuard.jsx")
const validate = require("../middlewares/handleValidation.jsx")
const { imageUpload } = require("../middlewares/imageUpload.jsx")

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)


module.exports = router
