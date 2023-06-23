import {studentModel} from '../models/students.js';

export default class Students {
    constructor() {
        console.log('Working strudents with DB');
    }

    getAll = async () => {
        const students = await studentModel.find().lean();
        return students
    }

    getAllPaginated = async (limit, page) => {
        const students = await studentModel.paginate({}, {limit, page, lean: true});
        return students;
    }

    save = async (student) => {
        const result = await studentModel.create(student);
        return result;
    }

    getById = async (id) => {
        const student = await studentModel.findOne({_id: id})
        return student.toObject();
    }

    updateById = async (id, student) => {
        const result = await studentModel.updateOne({_id: id}, student);
        return result;
    }
}