import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

console.log("MONGO URI:", process.env.MONGO_URI);


/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  });


/* Routes */
app.use("/api/auth", authRoutes);

/* Health Check Route */
app.get("/", (req, res) => {
  res.send("MakaanMart API Running");
});

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
