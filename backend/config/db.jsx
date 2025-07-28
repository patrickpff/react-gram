require("dotenv").config()
const mongoose = require("mongoose")

const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const strConn = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qrwym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const conn = async () => {
    try {
        console.log(strConn)
        const dbConn = await mongoose.connect(strConn)

        console.log("Connected to the Database!")

        return dbConn;
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error)
    }
}

conn()

module.exports = conn
