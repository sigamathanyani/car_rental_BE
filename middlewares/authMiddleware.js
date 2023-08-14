import jwt from "jsonwebtoken"

export const authenticatedUser = (req,res,next)=>{
    if(!req.headers.token) return res.json({"msg1":"Not authorized"});
    if(!req.headers.token.startsWith("Bearier")) return res.json({"msg":"Not authorized"});
    const header_token = req.headers.token.split(" ")[1];

    try {
       const user = jwt.verify(header_token,process.env.SECRET_KEY);
        req.user = user; 
        next();
    } catch (error) {
        return res.json({"msg2":error.message});
    }
}

export const user = (req,res,next)=>{
    authenticatedUser(req,res,next);

    if(req.user){
        
    }
}

export const admin = (req, res,next)=>{

}