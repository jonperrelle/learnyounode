var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(file) {
		var ext1 = path.extname(file);
		if (ext === ext1) {
			console.log(file);
		}
	});
});
