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

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM posts`,
          [],
          (_, result) => resolve(result.rows._array), //❗️
          (_, error) => reject(error),
        );
      });
    });
  }

  static createPost({
    text,
    date,
    bookmarked,
    img,
  }) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO posts (text, img, date, bookmarked) VALUES (?, ?, ?, ?)`, //❗️for guard
          [text, img, date, 0], //❗️
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }

  static updatePost(post) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE posts SET bookmarked = ? WHERE id = ?`,
          [post.bookmarked ? 0 : 1, post.id],
          () => resolve(),
          (_, error) => reject(error),
        );
      });
    });
  }

  static removePost(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM posts WHERE id = ?`,
          [id],
          () => resolve(),
          (_, error) => reject(error),
        );
      });
    });
  }
};
