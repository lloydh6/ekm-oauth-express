const sqlite3 = require('sqlite3').verbose();

const DAL = {
  openDatabase() {
    const db = new sqlite3.Database('./src/data-access/database.sqlite');
    return db;
  },
  closeDatabase(db) {
    db.close();
  },
  executeNonQuery(query) {
    const db = this.openDatabase();

    db.serialize(() => {
      db.run(query);
    });

    this.closeDatabase(db);
  },
};

module.exports = DAL;
