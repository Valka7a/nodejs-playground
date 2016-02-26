'use strict';

var sum = 0;
var arg = process.argv;
for (var i = 2; i < arg.length; i++) {
	sum += Number(arg[i]);
}
console.log(sum);