const {readData} = require("../utils/storage");

module.exports = function list ({category}) {
    const data = readData();
    let expenses = data.expenses;

    // Filter by Category if provided
    if (category) {
        expenses = expenses.filter((e) => e.category.toLowerCase() === category.toLowerCase());
    }

    if (expenses.length === 0) {
        console.log("Expenses Not Found");
        return ;
    }

    // Print header
    console.log("ID\tData\t\tDescription\t\tAmount\t\Category");
    console.log("-".repeat(70));

    // Print each expense
    expenses.forEach((e) => {
        console.log(`${e.id}\t${e.date}\t${e.description}\t\t\t$${e.amount}\t\t${e.category}`);
    });
};