import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import router from "./routes/store.route.js"

import logger from "./middleware/logger.middleware.js"
import limiter from "./middleware/logger.middleware.js"

dotenv.config()
const app = express()

const port = process.env.PORT || 8080
const mongodb_uri = process.env.MONGODB_URI

app.use(limiter)
app.use(logger)
app.use(express.json())
app.use("/api/products", router)

mongoose.connect(mongodb_uri)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(port, () => console.log(`Server listening on port ${port}...\n`))
})
.catch(error => console.log(`Could not connect to MongoDB: ${error}`))