const fs = require ("fs");
const path = require("path");
const { json } = require("stream/consumers");

const DATA_FILE = path.join(__dirname, "data.json");

function readData() {
    if(!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, json.stringify({ expense: [], nextId: 1}));
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
}

// ** write Data