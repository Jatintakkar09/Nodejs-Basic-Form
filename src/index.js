import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { db_Name } from "./constants.js";
dotenv.config({
    path: "./.env"
})



// console.log(process.env.CORS_ORIGIN);


connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log("Mongo Connection Failed")
    })
    app.listen(process.env.PORT,()=>{
        console.log("Listening on PORT ",process.env.PORT);
    })

})
.catch((error)=>{
    console.log(`Server error ${error}`);
})
