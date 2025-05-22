import express from 'express'
import { db } from '../models/todoSchema.js';

const router = express.Router();

//Post Request to /TodoList
router.post("/TodoList", async (req, res) => {
  try {
    console.log(req.body)
    const { todo, difficulty } = req.body;

    //MongoDB
    // const todoData = new Todo({
    //   todo,
    //   difficulty
    // })
    // Save to the database
    // await todoData.save();
    // console.log("Todo saved:", todoData);

    //MySQL
    await db.execute(`
      insert into todos(todo, difficulty) value(?, ?)
      `, [
      todo,
      difficulty
    ]);

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

    //using Mongoose
    // const data = await Todo.find();

    //using MYSQL
    const [data] = await db.execute(
      `select * from todos`
    ); //Find all data from DB
    console.log(data);
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
    //using Mongoose
    // await Todo.findByIdAndDelete(id); //Delete by id

    //using MYSQL
    await db.execute(
      `delete from users where _id = ${id}`
    ); //Delete by id
    return res.status(200).send("Deleted successfully");
  } catch (error) {
    console.log("Delete error:", error.message);
    return res.status(500).send("Error in delelting todos");
  }
})

//Patch Request
router.patch("/TodoList/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // using Mongoose
    // await Todo.findByIdAndUpdate(id, { completed: true })

    //using MySQL
    await db.execute(
      `
      update todos set completed = true where id = ${id}
      `
    )

    return res.status(200).send("Deleted successfully");
  } catch (error) {
    console.log("Delete error:", error.message);
    return res.status(500).send("Error in delelting todos");
  }
})


export default router;