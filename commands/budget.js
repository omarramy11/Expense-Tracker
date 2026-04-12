const { readData, writeData } = require("../utils/Storage");

module.exports = function budget({ month, amount }) {
  const parsedMonth = parseInt(month);
  if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) {
    console.error("Error: Month must be a number between 1 and 12.");
    process.exit(1);
  }

  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error("Error: Amount must be a positive number.");
    process.exit(1);
  }

  const data = readData();
  if (!data.budgets) data.budgets = {};

  data.budgets[parsedMonth] = parsedAmount;
  writeData(data);

  console.log(`Budget set successfully for month ${parsedMonth}: $${parsedAmount}`);
};