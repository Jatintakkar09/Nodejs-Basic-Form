import mongoose from "mongoose"
import { db_Name } from "../constants.js"
import dotenv from "dotenv"

const connectDB = async() => {
  
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${db_Name}`)

        console.log("MONGODB Successfully connected HOST", connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGODB Connection Error",error);
    }


}

export default connectDB