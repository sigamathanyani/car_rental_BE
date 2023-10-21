import { data } from "../database/db.js";

export const allCars = (req,res)=>{

    //Getting all the Cars
//     SELECT *
// FROM car
// LEFT JOIN review ON car.car_id = review.car_id
// WHERE car.car_id = 9;
    // const cars = "SELECT * FROM car LEFT JOIN review ON car.car_id = review.car_id";


//     SELECT
//     c.car_id,
//     c.year_of_make,
//     c.model,
//     COUNT(cr.review_id) as review_count
// FROM
//     car c
// LEFT JOIN
//     review cr ON c.car_id = cr.car_id
// GROUP BY
//     c.car_id, c.year_of_make, c.model
    // const cars = "SELECT c.car_id, FROM car"

    const cars = `
    SELECT
        c.car_name,
        c.model,
        c.year_of_make,
        c.max_speed,
        c.gasoline,
        c.transmission,
        c.type_of_car,
        c.location,
        c.price,
        c.seats,
        COUNT(cr.review_id) AS review_count,
        AVG(cr.rating) as rate
    FROM
        car c
    LEFT JOIN
        review cr
    ON
        c.car_id = cr.car_id
    GROUP BY
        c.car_id
`;

// You can use sqlQuery in your JavaScript code as needed.

    data.query(cars,(err,data)=>{
        if(err) res.send(err);
        else res.send(data);
    })
}

export const createCar = (req,res)=> {

    const {carName, carModel, carYear, carSpeed, gasoline,
        transmission, carType,address, province, city, price, seats,
    } = req.body;

    const location = address + " " + province + "," + city;

    const { user_id } = req.user;

    const create_car = "INSERT INTO CAR (user_id,car_name, model, year_of_make, max_speed, gasoline, transmission, type_of_car, location, price,seats) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    data.query(create_car,[user_id,carName, 
        carModel, carYear, carSpeed, gasoline, 
        transmission, carType, location, price, seats],
        (err,car)=>{
            if(err) { console.log(err); res.send("Sorry something went wrong!");}
            else res.json({msg:"Car Created"});
        })
}

export const getCar = (req,res)=>{
    const { carID } = req.params;

    const car = "SELECT * FROM car WHERE car_id = ?"
    data.query(car,[carID],(err, car)=>{
        if(err) console.log(err);
        else if(car.length === 0){
            res.json({message:`No car of ID ${carID} was found`});
        }else{
            res.json(car);
        }
        
    })
} 

export const deleteCar = (req,res)=>{
    const { carID } = req.params;

    const car = "DELETE FROM car WHERE car_id = ?"
    data.query(car,[carID],(err, car)=>{
        if(err) console.log(err);
        else if(car.affectedRows === 0){
            res.json({message:`No car of ID ${carID} was found`});
        }
        else{
            res.json({message:`Car of ID ${carID} was deleted`});
        }
        
    })
} 

export const editCar = (req,res)=>{

    const {carName, carModel, carYear, carSpeed, gasoline,
        transmission, carType,address, province, city, price, seats,
    } = req.body;
    
    const { carID } = req.params;
    const location = address + " " + province + "," + city;

    const updatedCar = "UPDATE car SET `car_name` = ?, `model`=?, `year_of_make`=?, `max_speed`=?, `gasoline`=?, `transmission`=?, `type_of_car`=?, `location`=?, `price`=?,`seats`=? WHERE car_id = ?";


    data.query(updatedCar,[carName, 
        carModel, carYear, carSpeed, gasoline, 
        transmission, carType, location, price, seats,carID],(err, car)=>{
        if(err) console.log(err);
        else if(car.affectedRows === 0){
            res.json({message:`No car of ID ${carID} was found`});
        }
        else{
            res.json({message:`Car of ID ${carID} was updated`});
        }
        
    })

} 