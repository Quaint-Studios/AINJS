// Core variables
const mkdirp = require('mkdirp');
const db_essentials = require.main.require("./app/database/db-essentials.js");

// WordNet variables
const natural = require('natural');
const wordnet = new natural.WordNet();

// SQLite variables
const sqlite3 = require('sqlite3').verbose();
mkdirp('storage/lang/');
const db = new sqlite3.Database('./storage/lang/dictionary.db');

/* *
* * Looks up some information on a specific word.
* * params: {
* *     "word": "The word to lookup."
* * }
* */
function lookup(word) {
    wordnet.lookup(word, function(results) {
        results.forEach(function(result) {
            console.log("------------------------------");
            console.log("Word: " + word + " ("  + result.pos + ")");
            console.log("Definition: " + result.def);
            console.log("Synonyms: " + result.synonyms);

            // Display examples, if available
            result.exp.forEach(function(example) {
                console.log("EXAMPLE: " + example);
            });
            console.log("------------------------------");
        });
    });
}

/* *
* * Creates a word if the bot determines that it doesn't know something.
* * It will associate synonyms and antonyms with it.
* * params: {
* *     "word": "The word to create."
* * }
* */
function createWord() {
    db_essentials.createTable(db, "")
}

// Export
module.exports.lookup = lookup;