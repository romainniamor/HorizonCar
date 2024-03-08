import { carsData } from "./data";

// Initialize Express
const express = require("express");
const cors = require("cors");
const app = express();
const data = carsData;

app.use(cors({ methods: "GET" }));

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
