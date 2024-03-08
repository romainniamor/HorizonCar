import { carsData } from "./data";
import express from "express";

// Initialize Express
const app = express();
const data = carsData;
// Create GET request
app.get("/", (req, res) => {
  res.send("Horizon Car's server is running...");
});

//Get all cars
app.get("/api/cars", (req, res) => {
  res.json(data);
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
