var fs = require("fs");
var contents = fs.readFileSync(process.argv[2]).toString()
var newLines = contents.match(/\n/g);
newLines === null ? console.log(0) : console.log(newLines.length);
