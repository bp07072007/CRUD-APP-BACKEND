import conn from "../db/conn.js";
export default class EntryService {
  // Find all contact detail from the database

  static async AccessAllContact() {
    return new Promise(function (resolve, reject) {
      conn.query("SELECT * FROM contact_db", function (err, rows) {
        if (rows === undefined) {
          reject(new Error("Error rows is undefined"));
        } else {
          resolve(rows);
        }
      });
    });
  }
}
