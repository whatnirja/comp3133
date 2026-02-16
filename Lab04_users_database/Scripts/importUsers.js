const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const User = require("../Models/User");

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const filePath = path.join(__dirname, "..", "UserData.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    const result = await User.insertMany(data, { ordered: false });
    console.log(`Inserted: ${result.length}`);
  } catch (err) {
    console.error("Import finished with errors:");
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
}

run();
