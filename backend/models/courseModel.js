import { Schema, model } from "mongoose"

const subDetailSchema = new Schema({
    chapter: { type: String, required: true },
    desc: { type: String, required: true },
})

const courseSchema = new Schema({
    sub_name: { type: String, required: true },
    sub_details: [subDetailSchema]
})

const CourseModel = model("Course", courseSchema)
// const subDetailModel = model("Sub-Details", subDetailSchema)

export {
    CourseModel,
    // subDetailModel
}