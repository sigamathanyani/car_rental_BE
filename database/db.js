import mysql from "mysql";

export const data = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ThanyaniLucy3#",
    database:"car_rental"
})

