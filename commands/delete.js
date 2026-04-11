const { readData, writeData} = require("../utils/storage");

module.exports = function deleteExpense( { id}) {
    const parseId = parseInt(id);
    if(isNaN(parseId)) {
        console.error("Error: ID must be a valid number.");
        process.exit(1);
    }
    const data = readData();
    const index = data.expenses.findIndex((e) => e.id === parseId);
    if (index === -1) {
        console.error(`Error: Expense with ID ${parseId} not found.`);
        process.exit(1);
    }

    data.expenses.splice(index, 1);
    writeData(data);
    console.log(`Expense deleted successfuly`)
}