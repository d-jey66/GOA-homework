import mongoose from "mongoose";

export const connetDb = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(err){
    console.log(err);
  }
}
