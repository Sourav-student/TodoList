import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   todo : {
      type : String,
      required : true
   },
   difficulty: {
      type : String,
      required : true
   },
   completed: {
      type : Boolean,
      default: false
   }
}, {timestamps:true})

const Todo = mongoose.model("Todo", todoSchema)
export default Todo