const fs = require("fs");

module.exports = function () {
    return {
        getData : () => {
            return JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        },
        writeData : (data) => {
            fs.writeFileSync("./db/db.json", JSON.stringify(data), "utf8");
        }
    }
}
