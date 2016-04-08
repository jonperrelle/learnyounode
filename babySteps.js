var arr = process.argv;
arr.splice(0, 2);
console.log(arr.reduce(function(a, b) { return Number(a) + Number(b);}));