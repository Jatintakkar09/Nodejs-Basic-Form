import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path"
const app = express();

// setting up the ejs files
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));
app.use(express.static('public'));

app.use(cors())

app.use(
    express.urlencoded({
      extended: true
    })
  );
  

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Adding routes
import UserRoute from "./routes/registerUser.route.js"
app.use("/api",UserRoute)



export { app };
