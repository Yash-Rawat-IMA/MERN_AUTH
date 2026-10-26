import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error connecting db`, error.message);
        process.exit(1); //status code 1 is failure
    }
}