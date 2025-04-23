const express = require("express")
const router = express.Router()

// Controller
const { 
    insertPhoto, 
    deletePhoto, 
    getAllPhotos, 
    getUserPhotos, 
    getPhotoById,
    updatePhoto,
    likePhoto
} = require("../controllers/PhotoController.jsx")

// Middlewares
const {photoInsertValidation, photoUpdateValidation} = require("../middlewares/photoValidation.jsx")
const authGuard = require("../middlewares/authGuard.jsx")
const validate = require("../middlewares/handleValidation.jsx")
const { imageUpload } = require("../middlewares/imageUpload.jsx")

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)
router.get("/:id", authGuard, getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put("/like/:id", authGuard, likePhoto)


module.exports = router
