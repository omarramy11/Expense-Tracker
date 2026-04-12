# Expense Tracker CLI

A simple Node.js command-line expense tracker built with `commander`.

## GitHub Repository Description

A lightweight CLI tool for tracking personal expenses, supporting add, update, delete, list, and monthly summary commands.

## Project Structure

- `index.js` - CLI entrypoint that defines commands and options.
- `commands/` - command handlers for add, update, delete, list, summary, budget, and export operations.
- `utils/Storage.js` - helper for reading and writing the local data file.
- `utils/data.json` - storage file for saved expenses.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the CLI:
   ```bash
   node index.js <command> [options]
   ```

## Commands

### Add a new expense

```bash
node index.js add --description "Lunch" --amount 12.50 --category Food
```

Required options:
- `--description <description>` - description of the expense
- `--amount <amount>` - expense amount
- `--category <category>` - optional category (defaults to `General`)

### Update an expense

```bash
node index.js update --id 1 --description "Coffee" --amount 4.75 --category Food
```

Required options:
- `--id <id>` - ID of the expense to update

Optional options:
- `--description <description>` - updated description
- `--amount <amount>` - updated amount
- `--Category <category>` - updated category

### Delete an expense

```bash
node index.js delete --id 1
```

Required option:
- `--id <id>` - ID of the expense to delete

### List expenses

```bash
node index.js list --category Food
```

Optional option:
- `--category <category>` - filter expenses by category

### Show summary

```bash
node index.js summary --month 4
```

Optional option:
- `--month <month>` - month number (`1` to `12`) to summarize expenses

### Set a monthly budget

```bash
node index.js budget --month 4 --amount 500
```

Required options:
- `--month <month>` - month number (`1` to `12`)
- `--amount <amount>` - budget amount

### Export expenses to CSV

```bash
node index.js export
```

- Exports all saved expenses to `expenses.csv` in the current working directory.

## Notes

- The CLI uses a local JSON file (`utils/data.json`) to persist expenses.
- Exported CSV output is written to `expenses.csv` in the current working directory.
- This project uses CommonJS modules with `type: "commonjs"` in `package.json`.
