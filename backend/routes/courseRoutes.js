import express from "express"
import { createSubjectAndChapter } from "../controllers/courseController.js"

const courseRouter = express.Router()

courseRouter.post("/", createSubjectAndChapter)

export {
    courseRouter
}