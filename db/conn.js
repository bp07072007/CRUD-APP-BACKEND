import  mysql from 'mysql';

const conn = mysql.createConnection({
    // host: 'localhost',
    // user: "root",
    // password: "",
    // database: "crud",
    host: 'sql6.freesqldatabase.com',
    user: "sql6524208",
    password: "7Shexa9mf8",
    database: "sql6524208",
    port:3306
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
})

export default conn;