import * as SQLite from 'expo-sqlite'; //❗️

const db = SQLite.openDatabase('post.db'); //❗️instance

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY NOT NULL,
            text TEXT NOT NULL,
            img NOT NULL,
            date TEXT,
            bookmarked INT
          )`,
          [],
          () => resolve(), // the callback is responsible for correctly creating DB
          (_, error) => reject(error), //❗️ `(_, ...` is request designation
        );
      });
    });
  }
};
