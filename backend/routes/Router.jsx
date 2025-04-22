const express = require("express")
const router = express()

router.use("/api/users", require("./UserRoutes.jsx"))
router.use("/api/photos", require("./PhotoRoutes.jsx"))

module.exports = router