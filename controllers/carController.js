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

    const {car_name, model, year_of_make, max_speed, gasoline,
        transmission, type_of_car, location, price,
    } = req.body;

    const { user_id } = req.user;

    const create_car = "INSERT INTO CAR (user_id,car_name, model, year_of_make, max_speed, gasoline, transmission, type_of_car, location, price) VALUES (?,?,?,?,?,?,?,?,?,?)";

    data.query(create_car,[user_id,car_name, 
        model, year_of_make, max_speed, gasoline, 
        transmission, type_of_car, location, price],
        (err,car)=>{
            if(err) res.send(err);
            else res.send("Car Created");
        })
}