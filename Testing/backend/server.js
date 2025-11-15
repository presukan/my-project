const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middlewares
app.use(cors());   // For now, allow all
app.use(express.json());

// Test Route (important for Render check)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API Routes
app.use("/api/orders", orderRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error: ", err));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
