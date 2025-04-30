import express from 'express'
import Todo from '../models/todoSchema.js';

const router = express.Router();

//Post Request to /TodoList
router.post("/TodoList", async (req, res) => {
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
router.get("/", (req, res) => {
  res.send("Server run successfully")
})

router.get("/TodoList", async (req, res) => {
  try {
    const data = await Todo.find(); //Find all data from DB
    res.json(data); //response DB
  } catch (error) {
    console.log("Fetch error:", error.message);
    res.status(500).send("Error fetching todos");
  }
});

//Delete Request
router.delete("/TodoList/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id); //Delete by id
    const data = await Todo.find();
    res.json(data);
    res.status(200).send("Todo deleted successfully");
  } catch (error) {
    console.log("Delete error:", error.message);
    res.status(500).send("Error in delelting todos");
  }
})

export default router;