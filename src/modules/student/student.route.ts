import express from 'express'
import { StudentController } from './student.controller' // Ensure the correct path to the controller file

// Create a Router
const router = express.Router()

// Call Controller Functions
router.post('/create-student', StudentController.createStudent)
router.get('/all-students', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)

export const StudentRoutes = router
