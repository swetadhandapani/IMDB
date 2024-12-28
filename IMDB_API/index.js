
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); 
const cors = require("cors");

const mongoString = process.env.DATABASE_URL;
const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); 
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified origin";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", routes); // Route handler

// MongoDB connection
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

// Error handler
database.on("error", (err) => console.log("Database connection error:", err));

// Success handler
database.once("connected", () => console.log("Database connected"));

// Server start
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
