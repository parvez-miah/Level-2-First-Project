import mongoose from 'mongoose'
import config from '../app/config' // Ensure the correct relative path to your config file
import app from './app'

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://devparvezmiah:krfToKuq8Y9IPh9d@level-2.15kzghp.mongodb.net/?retryWrites=true&w=majority&appName=Level-2'
    )
    console.log('Connected to the database successfully')
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`)
})

main()
