import {data} from "../database/db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req,res)=>{

    const { email, password, username } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);

    const user_query = "SELECT * FROM user WHERE email = ?"

    data.query(user_query,[email],(err, user)=>{
        if(err) return res.json(err);
        if(user.length>0) return res.json({"msg":"User already exist"});

        const add_query = "INSERT INTO USER (username, email, password) VALUES (?, ?, ?)"

        data.query(add_query,[username, email,hashedPass],(err,data)=>{
            if(err) return res.json(err);
            return res.json({"message":"User has been created"});
        });
    });

}

export const login = (req,res)=>{
    const { email, password } = req.body;

    const user_query = "SELECT * FROM user WHERE email = ?";

    data.query(user_query,[email],(err,user)=>{
        if(user.length){
            const real_pass = bcrypt.compareSync(password, user[0].password);
            if(real_pass) {
            
                const payload = {user_id:user[0].user_id,isAdmin:user[0].isAdmin}
    
                const token = jwt.sign(payload,process.env.SECRET_KEY);

                return res.json({"token":token});
            }

            else {return res.json("Wrong credentials");}
        }else{
            return res.json("Wrong credentials");
        }
    })
}
