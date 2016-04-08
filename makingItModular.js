var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, data) {
	err ? console.log("Error") : data.forEach(function(a) {console.log(a)});
});



