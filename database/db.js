import mysql from "mysql";

export const data = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Use your own database",
    database:"car_rental"
})

