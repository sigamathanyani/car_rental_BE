import { data } from "../database/db.js";

export const getRevs = (req,res)=>{

    const {carID} = req.params;

    const all_revs = "SELECT * FROM review WHERE car_id = ?";
    data.query(all_revs,[carID],(err,revs)=>{
        if(err) res.send(err);
        else res.send(revs);
    })
}

export const getRev = (req,res)=>{
    const {revID} = req.params;

    const rev = "SELECT * FROM review WHERE review_id = ?"

    data.query(rev,[revID],(err,review)=>{
        if(err) res.send(err);
        else res.send(review);
    })
}

export const addRev = (req,res)=>{
    const { rating, coment } = req.body;
    const { carID } = req.params;
    const { user_id } = req.user;

    const review = "INSERT INTO review (reviewer_id,car_id ,rating, coment) VALUES (?,?,?,?)";

    data.query(review,[user_id, carID,rating, coment], (err,rev)=>{
        if(err) { console.log(err); res.send("Sorry something went wrong!");}
        else res.json({msg:"Review was Created"});
    });
}

export const editRev = (req,res)=>{
    const { rating, coment } = req.body;
    const { revID } = req.params;

    const updatedReview = "UPDATE review SET `rating` = ?, `coment`=? WHERE review_id = ?";

    data.query(updatedReview,[rating,coment,revID])
}

export const deleteRev = (req,res)=>{
    const { revID } = req.params;

    const car = "DELETE FROM review WHERE review_id = ?"
    data.query(car,[revID],(err, car)=>{
        if(err) console.log(err);
        else if(car.affectedRows === 0){
            res.json({message:`No review of ID ${revID} was found`});
        }
        else{
            res.json({message:`Review of ID ${revID} was deleted`});
        }
        
    })
}