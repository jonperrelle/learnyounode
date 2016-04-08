var fs = require('fs');
var path = require('path'); 

module.exports = function(dir, ext, callback) {
	var list = [];
	fs.readdir(dir, function(err, data) {
		if (err) {
			return callback(err);
		}
		else {
			data.forEach(function(file) {
				if (path.extname(file) === "." + ext) {
					list.push(file);
				}
			});
		}
		return callback(null, list);
	});
}

