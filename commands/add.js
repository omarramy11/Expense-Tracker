const { readData, writeData } = require("../utils/storage");

module.exports = function add({ description, amount, category }) {
  // Validate amount
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error("Error: Amount must be a positive number.");
    process.exit(1);
  }

  const data = readData();

  const expense = {
    id: data.nextId,
    date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    description,
    amount: parsedAmount,
    category,
  };

  data.expenses.push(expense);
  data.nextId++;

  writeData(data);

  console.log(`Expense added successfully (ID: ${expense.id})`);
};