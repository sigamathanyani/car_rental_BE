import { data } from "../database/db.js";

export const allCars = (req,res)=>{

    const loggedIn_user = "SELECT * FROM user WHERE user_id = ?"
    data.query(loggedIn_user,[req.user.user_id],(err,user)=>{
        if(err) console.log(err);
        else{
            res.send(`${user[0].username} has logged in`);
        }
    })
}