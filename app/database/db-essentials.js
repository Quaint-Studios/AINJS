function createTable(db, tableName, columns) {
    if(!db || !tableName || !values) {
        return;
    }
    
    db.run("CREATE TABLE IF NOT EXISTS `" + + "` (" + columns + ")");
}

function insertInto(db, tableName, values) {
    if(!db || !tableName || !values) {
        return;
    }
    
     db.run("INSERT INTO `" + tableName + "` VALUES (?, ?, ?)", values);
}

function selectFrom(db, tableName, selector) {
      db.each("SELECT `" + selector + "` FROM `" + tableName + "`", function (err, row) {
          console.log(row);
      });
}

// Exports
module.exports.createTable = createTable;
module.exports.insertInto = insertInto;
module.exports.selectFrom = selectFrom;