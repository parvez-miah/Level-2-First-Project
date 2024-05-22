import Joi from 'joi'

const StudentValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(10).max(100).required(),
  email: Joi.string().email().required(),
  // Add other fields and their validations as needed
})

export default StudentValidationSchema
