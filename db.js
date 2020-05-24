const fs = require("fs");

function getData(){
    fs.readFile('./db.json', 'utf8', function(err, contents) {
        return contents;
    });
}

function writeData(data) {
    fs.writeFile("./db.json", data, "utf8");
}
