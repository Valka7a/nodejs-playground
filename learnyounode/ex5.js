'use strict';

var fs = require('fs');
var path = require('path');
var dir = ".";
var files = "*";

if (process.argv[2] !== undefined) {
	dir = process.argv[2];
}

if (process.argv[3] !== undefined) {
	files = process.argv[3];
}

fs.readdir(dir, function(err, list) {
	if (err) {
		console.error(err);
	}
	list.forEach(function(item) {
		if (files === "*") {
			console.log(item.toString());
		}
		else if (path.extname(item) === "." + files) {
			console.log(item);
		}
	});
});