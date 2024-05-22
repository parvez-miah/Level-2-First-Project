import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student-interface'
// Creating Schema for Optimize Code :

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true, // Remove Whitespace from text
    maxlength: [20, "Name Should'nt be nore then 20 Words!"],
    // Using Custom Validation
    validate: function (value: string) {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1) // Parvez
      return firstNameStr === value
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true, // Remove Whitespace from text

    // Using Validator Library

    // validate: {
    //   validator: (value) => validator.isAlpha(value),
    //   message: `{VALUE} Should not be a number Format `,
    // },
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContact: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
  motherContact: {
    type: String,
  },
})

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
  },

  phone: {
    type: String,
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: userNameSchema,

  gender: {
    enum: {
      values: ['male', 'female'],
      // message: 'Gender should be male or female ',
    },
  }, //  Enam Type
  dateOfBirth: {},

  email: {
    type: String,
  },

  contactInfo: {
    type: String,
  },

  emergencyContact: {
    type: String,
  },

  bloodGroup: {
    enum: [
      'A',
      'B',
      'AB',
      'O',
      'A+',
      'A-',
      'B+',
      'B-',
      'AB+',
      'AB-',
      'O+',
      'O-',
    ],
  },
  presentAdress: {
    type: String,
  },
  permanentAdress: {
    type: String,
  },

  guardian: guardianSchema,

  LocalGuardian: LocalGuardianSchema,
})

// Creating a Model

export const StudentModel = model<Student>('Student', studentSchema)
