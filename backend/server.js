import express from "express"
import mongoose from "mongoose"
import { courseRouter } from "./routes/courseRoutes.js"

const app = express()
app.use(express.json())
const course = courseRouter

app.use("/", course)

const PORT = 3000

mongoose.connect("mongodb://127.0.0.1:27017/course-details")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is live on http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.log("Connection failure in DB.", err)
    }) 