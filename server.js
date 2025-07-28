import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import gigRoutes from './routes/gigRoutes.js';
import messageRoutes from "./routes/messageRoutes.js";
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/gigs', gigRoutes);

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Freelancer Marketplace API is running 🚀");
});

app.use("/api/messages", messageRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed", err);
  });
console.log("Mongo URI:", process.env.MONGO_URI);
