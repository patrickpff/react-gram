const express = require("express")
const router = express()

router.use("/api/users", require("./UserRoutes.jsx"))

// test router
router.get("/", (req, res) => {
    res.send("API Working!")
})

module.exports = router