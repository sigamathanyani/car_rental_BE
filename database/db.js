import mysql from "mysql";

export const data = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

