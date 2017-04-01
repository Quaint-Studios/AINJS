// Essential variables
const fs = require("fs");
const mkdirp = require('mkdirp');
const path = require('path');

/* *
* * Seperates an array with the provided seperator and returns the sliced array.
* * params: {
* *     "seperator": "The seperator split the array with.",
* *     "start": "The index to start at (default: 0).",
* *     "end": "The index to end at (default: this.length - 1)."
* * }
* */
Array.prototype.seperate = function(seperator, start, end) {
	if(!start)
		start = 0;

	if(!end)
		end = this.length - 1;

	end++;
  
  return this.slice(start, end).join(seperator);
}

/* *
* * Converts a string of text to parameters by seperating it via quotations, apostrophes, or spaces.
* * params: {
* *     "string": "The string to convert to a param."
* * }
* */
String.prototype.toParams = function(string) {
    let PARAM_REGEX = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
	let match = null;
	let parts = [];

	while(match = PARAM_REGEX.exec(string)) {
		parts.push(match[1] || match[2] || match[0]);
	}
	
	return parts;
}

/* *
* * Checks if a file exists. If it doesn't exist, create it.
* * params: {
* *     "fileName": "The name of the file to check for and/or create.",
* *     "defaultData": "The data to write to the file if the file does not exist.",
* *     "callback": "The function to callback to."
* * }
* */
function checkForFile(fileName, defaultData, callback)
{
    fs.exists(fileName, function (exists) {
        if(exists) {
            callback();
        } else {
            mkdirp(path.dirname(fileName), function(err) {
                if(err)
                    return;
                
                writeFile(fileName, defaultData, callback);
            });            
        }
    });
}

function writeFile(fileName, defaultData, callback) {
    fs.writeFile(fileName, defaultData, {flag: 'wx'}, function (err, data) 
    { 
        callback();
    })
}



// Exports
module.exports.fs = fs;
module.exports.seperate = Array.prototype.seperate;
module.exports.toParams = String.prototype.toParams;
module.exports.checkForFile = checkForFile;