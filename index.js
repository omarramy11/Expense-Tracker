const {program} = require("commander");

program
.name("expense-tracker")
.description("A simple expense Tracker CLI")
.version("1.0.0");

// ** Add : command - decription - requriedoption"description"/amount - option"category" and general - action(options with require add)
program
.command("add")
.description(" Add a new expense")
.requiredOption("--description <description>", "Expense description")
.requiredOption("--amount <amount>", "Expense Amount")
.option("--category <category>", "Expense Category", "General")
.action((options) => {
    require("./commands/add")
});

// update
program
.command("update")
.description("Update an Expense")
.requiredOption("--id <Id>", "Expense ID")
.option("--description <description>", "New Description")
.option("--amount <amount>", "New Amount")
.option("--Category <category>", "New Category")
.action((option) => {
    require("./commands/update")(options);
});

// Delete
program
    .command ("delete")
    .description("Delete an Expense")
    .requiredOption("--id <id>", "Expense ID")
    .action((options) => {
        require("./commands/delete")(options);
    })

// list
program
    .command ("List")
    .description("List all Expenses")
    .option("--category <category>", "Filter By Category")
    .action((option) => {
        require("./commands/list");
    });