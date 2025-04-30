import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routers/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Connected to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("DB connected");
  } catch (error) {
    console.log("database error", error.message);
  }
}

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
dotenv.config();


//Import then use router
app.use(router)

// Start the server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});