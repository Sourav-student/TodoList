import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routers/router.js';
// import connectDB from './configs/connectDB.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
dotenv.config();


//Import then use router
app.use(router)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
