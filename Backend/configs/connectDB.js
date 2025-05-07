//Connected to mongoDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("DB connected");
  } catch (error) {
    console.log("database error", error.message);
  }
}

export default connectDB