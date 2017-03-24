// Core variables
const fs = require("fs");
const conn = require("/app/conn.js");
const essentials = require("/app/utils/essentials.js");

function login() {
	essentials.checkForFile('token.txt', function() {
        fs.readFile('token.txt', 'utf8', function(err, contents) {
            if(contents.length > 0)
                token = contents;

            conn.client.login(token);
        });
    });
}

// Exports
module.exports.fs = fs;
module.exports.essentials = essentials;
module.exports.login = login;