import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './modules/student/student.route'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Application Routes
app.use('/api/v1/students', StudentRoutes)

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
