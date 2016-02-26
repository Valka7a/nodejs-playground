'use strict';

var fs = require('fs');
var fileName = process.argv[2];

fs.readFileSync(fileName, 'utf8', function (err, data) {
	if (err) {
		throw err;
	}
	
    var nbLines = data.split('\n').length - 1;
	console.log(nbLines);
});