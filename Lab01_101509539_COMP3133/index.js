// index.js
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFile = path.join(__dirname, "input_countries.csv");
const canadaFile = path.join(__dirname, "canada.txt");
const usaFile = path.join(__dirname, "usa.txt");

// Delete output files if they already exist
function safeDelete(filePath) {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (err) {
    console.error(`Error deleting ${path.basename(filePath)}:`, err.message);
  }
}

safeDelete(canadaFile);
safeDelete(usaFile);

// Create write streams and write headers
const canadaStream = fs.createWriteStream(canadaFile, { flags: "a" });
const usaStream = fs.createWriteStream(usaFile, { flags: "a" });

const header = "country,year,population\n";
canadaStream.write(header);
usaStream.write(header);

let canadaCount = 0;
let usaCount = 0;

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    // Normalize/defend against weird casing/spaces in CSV
    const country = String(row.country ?? "").trim().toLowerCase();
    const year = String(row.year ?? "").trim();
    const population = String(row.population ?? "").trim();

    if (!country || !year || !population) return;

    if (country === "canada") {
      canadaStream.write(`${country},${year},${population}\n`);
      canadaCount++;
    } else if (country === "united states") {
      usaStream.write(`${country},${year},${population}\n`);
      usaCount++;
    }
  })
  .on("end", () => {
    canadaStream.end();
    usaStream.end();
    console.log("Done.");
    console.log(`Canada rows written: ${canadaCount}`);
    console.log(`United States rows written: ${usaCount}`);
    console.log("Check files: canada.txt and usa.txt");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err.message);
  });
