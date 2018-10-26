const sqlite3 = require('sqlite3').verbose();

const DAL = {
    openDatabase: function() {
        const db = new sqlite3.Database('./database.sqlite');
        return db;
    },
    closeDatabase: function(db) {
        db.close();
    },
    executeNonQuery: function(query) {
        const db = this.openDatabase();

        db.serialize(() => {
            db.run(query);
        });

        this.closeDatabase(db);
    }
}

module.exports = DAL;
