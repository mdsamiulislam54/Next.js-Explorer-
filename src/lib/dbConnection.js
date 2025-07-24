import mongoose from 'mongoose'

const MONGODB_URI = "mongodb://localhost:27017/nextjs-explore"

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}
const dbConnection = () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  mongoose
    .connect(MONGODB_URI,)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch(err => {
      console.error('MongoDB connection error:', err)
    })
}

export default dbConnection;