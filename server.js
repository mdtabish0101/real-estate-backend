import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
