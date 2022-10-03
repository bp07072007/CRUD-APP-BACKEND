import  mysql from 'mysql';

const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "crud"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
})

export default conn;