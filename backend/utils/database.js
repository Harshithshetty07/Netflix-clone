import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseconnection = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("mongodb connected successfully");
        })
        .catch((error) => {
            console.log(error);
        });
};

export default databaseconnection;
