import { Student } from './student-interface'
import { StudentModel } from './student.model'

const createStudentInToDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentDB = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.aggregate([{ $match: { id } }])
  return result
}

export const StudentService = {
  createStudentInToDB,
  getAllStudentDB,
  getSingleStudentFromDB,
}
