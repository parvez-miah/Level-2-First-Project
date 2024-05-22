import { Request, Response } from 'express'
import { StudentService } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    // Create a Schema validation using JOI

    // Finished Schema Validarion

    const { student: studentData } = req.body
    const result = await StudentService.createStudentInToDB(studentData)
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentDB()

    // Send response
    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id: studentId } = req.params
    const result = await StudentService.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
