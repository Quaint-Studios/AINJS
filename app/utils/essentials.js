// Essential variables
const fs = require("fs");

// Array seperator
function Array.prototype.seperate(seperator, start, end) {
	if(!start)
		start = 0;

	if(!end)
		end = this.length - 1;

	end++;
  
  return this.slice(start, end).join(seperator);
}

// String to params
String.prototype.toParams(string) {
	let match = null;
	let parts = [];

	while (match = PARAM_REGEX.exec(command)){
		parts.push(match[1] || match[2] || match[0]);
	}
	
	return parts;
}

// Exports
module.exports.fs = fs;
module.exports.Array.prototype.seperate = Array.prototype.seperate;
module.exports.String.prototype.toParams = String.prototype.toParams;