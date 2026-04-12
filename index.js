#!/usr/bin/env node
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
    require("./commands/add")(options);
});

// update
program
.command("update")
.description("Update an Expense")
.requiredOption("--id <Id>", "Expense ID")
.option("--description <description>", "New Description")
.option("--amount <amount>", "New Amount")
.option("--Category <category>", "New Category")
.action((options) => {
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
    .action((options) => {
        require("./commands/list")(options);
    });

// Summary
program
    .command("summary")
    .description("Show Expenses summary")
    .option("--month <month>", "Month number (1-12)")
    .action((options) => {
        require("./commands/summary")(options);
    });

    // Budget
program
  .command("budget")
  .description("Set a monthly budget")
  .requiredOption("--month <month>", "Month number (1-12)")
  .requiredOption("--amount <amount>", "Budget amount")
  .action((options) => {
    require("./commands/budget")(options);
  });

    program.parse(process.argv);