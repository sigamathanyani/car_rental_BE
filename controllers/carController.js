import { data } from "../database/db.js";

export const allCars = (req,res)=>{

    //Getting all the Cars
    const cars = "SELECT * FROM car"
    data.query(cars,(err,data)=>{
        if(err) res.send(err);
        else res.send(data);
    })
}

export const createCar = (req,res)=> {

    // Check for logged in user

/*     const loggedIn_user = "SELECT * FROM user WHERE user_id = ?"
    data.query(loggedIn_user,[req.user.user_id],(err,user)=>{
        if(err) console.log(err);
        else{
            res.send(`${user[0].username} has logged in`);
        }
    }) */

    const {user_id, car_name, model, year_of_make, max_speed, gasoline,
        transmission, type_of_car, location, price,
    } = req.body;

    const create_car = "INSERT INTO CAR (user_id,car_name, model, year_of_make, max_speed, gasoline, transmission, type_of_car, location, price) VALUES (?,?,?,?,?,?,?,?,?,?)";

    data.query(create_car,[user_id,car_name, 
        model, year_of_make, max_speed, gasoline, 
        transmission, type_of_car, location, price],
        (err,car)=>{
            if(err) res.send(err);
            else res.send("Car Created");
        })
}