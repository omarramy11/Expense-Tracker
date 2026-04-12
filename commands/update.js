const { readData, writeData} = require("../utils/storage");

module.exports = function updateExpense({ id, description, amount, category }) {
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
        console.error("Error: ID must be a valid number.");
        process.exit(1);
    }

    const data = readData();
    const expense = data.expenses.find((e) => e.id === parseId);

    if (!expense) {
        console.error(`Error: Expense with ID ${parseId} not found.`);
        process.exit(1);
    }

    // ** Update fields if provided**
    if(description) expense.description = description;
    if(category) expense.category = category;
    if(amount) {
        const parseAmount = parseFloat(amount);
        if(isNaN(parseAmount) || parseAmount <= 0) {
            console.error("Error: Amount must be a positive number.");
            process.exit(1);
        }
        expense.amount = parseAmount;
    }

    writeData(data);
    console.log(`Expense updated successfuly`)
}
 

