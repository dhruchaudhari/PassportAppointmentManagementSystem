import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app =new express()
app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your frontend URL
        credentials: true, // Allow cookies to be sent
    })
);
app.use(cookieParser())
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))


//import routes

import userRoute from "./src/routes/userRoute.js"


//define routes
app.use("/users" , userRoute)

export default app