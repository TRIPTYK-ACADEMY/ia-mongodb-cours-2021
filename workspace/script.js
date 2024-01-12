let db = connect("mongodb://root:test123@localhost");

// liste les bases de données
let dbList = db.adminCommand("listDatabases");

console.log(dbList);