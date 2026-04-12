const fs = require("fs");
const path = require("path");
const { readData } = require("../utils/Storage");

module.exports = function exportCSV() {
  const data = readData();
  const expenses = data.expenses;

  if (expenses.length === 0) {
    console.log("No expenses to export.");
    return;
  }

  const header = "ID,Date,Description,Amount,Category";
  const rows = expenses.map(
    (e) => `${e.id},${e.date},${e.description},${e.amount},${e.category}`
  );

  const csv = [header, ...rows].join("\n");
  const outputPath = path.join(process.cwd(), "expenses.csv");

  fs.writeFileSync(outputPath, csv);
  console.log(`Expenses exported successfully to ${outputPath}`);
};