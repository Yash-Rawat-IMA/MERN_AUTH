import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
// middlewares
app.use(express.json()); //allows to parse incoming requests with json through req.body

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port: ${PORT}`)
})