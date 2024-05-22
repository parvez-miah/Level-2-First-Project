// Declare Guardian Type for better optimize the code

// Created a Interface

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContact: string
  motherName: string
  motherOccupation: string
  motherContact: string
}

export type UserName = {
  firstName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  phone: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactInfo: string
  emergencyContact: string
  bloodGroup?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-'
  presentAdress: string
  permanentAdress: string
  guardian: Guardian
  LocalGuardian: LocalGuardian
}
