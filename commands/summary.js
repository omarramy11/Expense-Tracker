const { readData } = require("../utils/storage");

module.exports = function summary({ month }) {
  const data = readData();
  let expenses = data.expenses;

  if (month) {
    const parsedMonth = parseInt(month);
    if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) {
      console.error("Error: Month must be a number between 1 and 12.");
      process.exit(1);
    }

    const currentYear = new Date().getFullYear();
    expenses = expenses.filter((e) => {
      const date = new Date(e.date);
      return (
        date.getMonth() + 1 === parsedMonth &&
        date.getFullYear() === currentYear
      );
    });

    const monthName = new Date(currentYear, parsedMonth - 1).toLocaleString(
      "en",
      { month: "long" }
    );
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`Total expenses for ${monthName}: $${total}`);
  } else {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`Total expenses: $${total}`);
  }
};