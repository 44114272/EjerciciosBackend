import {courseModel} from '../models/courses.js';

export default class Courses {
    constructor() {
        console.log('Working users with DB');
    }

    getAll = async() => {
        // Transforma los datos de mongodb a un objeto plano con .lean()
        const courses = await courseModel.find().lean();
        return courses;
    }

    save = async(course) => {
        const result = await courseModel.create(course);
        return result;
    }

    update = async (id, course) => {
        const result = await courseModel.updateOne({_id: id}, course);
        return result;
    }
}