import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

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

import Todo from './models/todoSchema.js';

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
dotenv.config();


//Post Request to /TodoList
app.post("/TodoList", async (req, res) => {
  try {
    console.log(req.body)
    const { todo, difficulty } = req.body;
    const todoData = new Todo({
      todo,
      difficulty
    })

    // Save to the database
    await todoData.save();
    console.log("Todo saved:", todoData);
    res.redirect(process.env.REDIRECT_LINK)
  } catch (error) {
    console.log("The error is :", error.message);
  }
})

// GET all todos
app.get("/TodoList", async (req, res) => {
  try {
    const data = await Todo.find();
    res.json(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
    res.status(500).send("Error fetching todos");
  }
});

// Start the server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});