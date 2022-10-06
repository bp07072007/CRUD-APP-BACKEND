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

  // Access single contact detail from the database

  static async FetchSingleContact(id) {
    return new Promise(function (resolve, reject) {
      // MySQL query to get the information
      conn.query(
        "SELECT * FROM contact_db where id=?",
        id,
        function (err, rows) {
          if (rows === undefined) {
            reject(new Error("Error rows is undefined"));
          } else {
            resolve(rows);
          }
        }
      );
    });
  }
// Add contact detail into database

static async AddContact(params) {
  try {
    //Insert the new contact information to database.
    const query =
      "INSERT INTO contact_db set name=?,email=?,contact=?,status=?";
    conn.query(
      query,
      [params.name, params.email, params.contact, params.status],
      (err, rows) => {
        if (err) throw err;
        return rows;
      }
    );
  } catch (error) {
    const err = {
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: ERR_CODES[500].message,
    };
    throw err;
  }
}

// Update contact detail

static async UpdateContact(params) {
  try {
    //update the  information into database.
    const query =
      "UPDATE  contact_db set name=?,email=?,contact=? where id=?";
    conn.query(
      query,
      [params.name, params.email, params.contact, params.id],
      (err, rows) => {
        if (err) throw err;

        return rows;
      }
    );
  } catch (error) {
    const err = {
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: ERR_CODES[500].message,
    };
    throw err;
  }
}
}
