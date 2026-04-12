const { readData, writeData } = require("../utils/storage");

module.exports = function add({ description, amount, category }) {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error("Error: Amount must be a positive number.");
    process.exit(1);
  }

  const data = readData();

  const expense = {
    id: data.nextId,
    date: new Date().toISOString().split("T")[0],
    description,
    amount: parsedAmount,
    category,
  };

  data.expenses.push(expense);
  data.nextId++;
  writeData(data);

  console.log(`Expense added successfully (ID: ${expense.id})`);

  // Check budget warning
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  if (data.budgets) {
    const budget = data.budgets[currentMonth];
    if (budget) {
      const totalThisMonth = data.expenses
        .filter((e) => {
          const date = new Date(e.date);
          return (
            date.getMonth() + 1 === currentMonth &&
            date.getFullYear() === currentYear
          );
        })
        .reduce((sum, e) => sum + e.amount, 0);

      if (totalThisMonth > budget) {
        console.warn(
          `⚠️  Warning: You have exceeded your budget for this month! (Budget: $${budget}, Spent: $${totalThisMonth})`
        );
      } else {
        console.log(
          `ℹ️  Monthly budget remaining: $${(budget - totalThisMonth).toFixed(2)}`
        );
      }
    }
  }
};