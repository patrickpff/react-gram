require("dotenv").config()
const mongoose = require("mongoose")

const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbCluster = process.env.DB_CLUSTER
const dbAppName = process.env.DB_APP_NAME

const strConn = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.mongodb.net/?retryWrites=true&w=majority&appName=${dbAppName}`

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
