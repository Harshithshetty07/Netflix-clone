import express from 'express';
import dotenv from 'dotenv';
import databaseconnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
import cors from 'cors';


dotenv.config({
    path: ".env"
});

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}
app.use(cors(corsOptions));

// Database connection
databaseconnection();

// API 
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
