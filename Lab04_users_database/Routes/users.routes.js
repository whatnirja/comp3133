const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
  try {
    const created = await User.create(req.body);
    return res.status(201).json({
      message: "User created",
      data: created,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    if (err.code === 11000) {
      return res.status(409).json({
        message: "Validation failed",
        errors: ["Email already exists (must be unique)"],
      });
    }

    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

module.exports = router;
