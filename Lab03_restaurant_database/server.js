require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Restaurant = require("./Models/Restaurant");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/restaurants", async (req, res) => {
  try {
    const sortBy = (req.query.sortBy || "").toUpperCase();

    let sortOption = {};
    if (sortBy === "ASC") sortOption = { restaurant_id: 1 };
    if (sortBy === "DESC") sortOption = { restaurant_id: -1 };

    const restaurants = await Restaurant.find({})
      .sort(sortOption); 

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;

    const restaurants = await Restaurant.find({ cuisine: cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/restaurants/sorted", async (req, res) => {
  try {
    const sortBy = (req.query.sortBy || "ASC").toUpperCase();
    const sortOption = sortBy === "DESC" ? { restaurant_id: -1 } : { restaurant_id: 1 };

    const restaurants = await Restaurant.find(
      {},
      {
        _id: 1,          
        cuisine: 1,      
        name: 1,
        borough: 1,      
        restaurant_id: 1 
      }
    ).sort(sortOption);

  
    const formatted = restaurants.map((r) => ({
      id: r._id,
      cuisines: r.cuisine,
      name: r.name,
      city: r.borough,
      restaurant_id: r.restaurant_id,
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/restaurants/:cuisineName", async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName;

    const restaurants = await Restaurant.find(
      {
        cuisine: cuisineName,
        borough: { $ne: "Brooklyn" },
      },
      {
        _id: 0,     
        cuisine: 1, 
        name: 1,
        borough: 1, 
      }
    ).sort({ name: 1 });

    const formatted = restaurants.map((r) => ({
      cuisines: r.cuisine,
      name: r.name,
      city: r.borough,
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => res.send("Lab 03 Restaurant API is running"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
