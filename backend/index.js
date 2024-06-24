import express from 'express';
import dotenv from 'dotenv';
import databaseconnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'



dotenv.config({
    path: ".env"
});

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Database connection
databaseconnection();


// API 
app.use("/api/v1/user", userRoute)


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello Welcome",
        success: true
    })
})

/* http://localhost:8080/api/v1/user/register     */


app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
