// Using Mongoose In MongoDB
// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//    todo : {
//       type : String,
//       required : true
//    },
//    difficulty: {
//       type : String,
//       required : true
//    },
//    completed: {
//       type : Boolean,
//       default: false
//    }
// }, {timestamps:true})

// const Todo = mongoose.model("Todo", todoSchema)
// export default Todo


/*Using MYSQL*/
import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

export const db = await mysql.createConnection({
   host : process.env.DB_HOST,
   user : process.env.DB_USER,
   password : process.env.DB_PASSWORD,
   database : process.env.DB_DATABASE
})