import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
    origin: process.env.CORS_ORIGIN, // Ensure this environment variable is set correctly
    credentials: true,
})
);

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

import All from "./routes/allusers.route.js"

app.use("/api",UserRoute)
app.use("/api/v1",All)


export { app };
