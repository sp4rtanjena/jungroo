import { CourseModel } from "../models/courseModel.js"

const createSubjectAndChapter = async (req, res) => {
    const { sub_name, chapter, desc } = req.body
    try {
        // let subject_details = []
        // let details = {}
        // details.chatper = chapter
        // details.desc = desc

        // subject_details.push(details)
        // console.log(subject_details)
        // console.log(details)
        // const subDetails = new subDetailModel({
        //     chapter,
        //     desc
        // })

        const course = new CourseModel({
            sub_name,
            subject_details: [{ "chapter": "dbnbwdw", "desc": "something" }]
        })

        await course.save()
        res.status(201).json({ msg: "Subject created successfully!" })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export {
    createSubjectAndChapter
}