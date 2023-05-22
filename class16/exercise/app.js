import userModel from "./models/users.js";
import mongoose from "mongoose";
import studentModel from "./models/students.js";
import courseModel from "./models/courses.js";

const environment = async () => {
    // falta la conexion a la DB pero es a modo de ejemplo
      try {
        await mongoose.connect('mongodb+srv://joaquinelia:4iOyPwxbtCoxQlmS@cluster39760je.eja9lgp.mongodb.net/?retryWrites=true&w=majority')
        // conocer tiempo de ejecucion con .explain
        //const response = await userModel.find({first_name: 'Alex'}).explain('executionStats')
        // await studentModel.create({
        //     first_name: 'Joaquin',
        //     last_name: 'Elia',
        //     email: 'je@hotmail.com',
        //     gender: 'M'
        // })

        // await courseModel.create({
        //     title: 'Programacion back end',
        //     description: 'Curso de node y express',
        //     teacher: 'Alex Pinaida'
        // })

        //relation 
        // const student = await studentModel.findOne({_id: "646aa2513c0081dc0c419857"})
        // console.log(student);
        // student.courses.push({course: '646aa2513c0081dc0c41985a' })
        // const result = await studentModel.updateOne({_id: '646aa2513c0081dc0c419857'}, student)
        // console.log(result);

        const response = await studentModel.find();
        console.log(JSON.stringify(response, null, '\t'));
        console.log('Termino el proceso');
      } catch (error) {
          console.log(error);
      }
}

environment()
