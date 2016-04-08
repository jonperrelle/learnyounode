var fs = require('fs');
fs.readFile(process.argv[2], "utf8", function(error, contents) {
	var newLines = contents.match(/\n/g);
	newLines === null ? console.log(0) : console.log(newLines.length);
});