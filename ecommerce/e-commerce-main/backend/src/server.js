import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import admindproductRoutes from "./routes/adminProducts.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { authenticateToken } from "./middleware/authMiddleware.js";

const app = express();

// Connect DB
connectDB();

const allowedOrigins = [
  "https://e-commerce-teal-iota-85.vercel.app",
  "http://localhost:5173",
  "http://localhost:5175",
  "http://localhost:5176"
];

app.use(
  cors({
    origin: "http://localhost:5173", // your React dev URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false, // set to false for now to avoid complications
  })
);
//Middleware to parse JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running and connected to MongoDB!");
});

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/admin/products", admindproductRoutes);

// Serve static images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://127.0.0.1:${PORT}`)
);