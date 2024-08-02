const {Flights} = require("../models/index")

class FlightRepository{

    async createFlight(data){
        try{
            console.log("data at flight repository",data);
            const flight=await Flights.create(data);
            return flight;
        }catch(error){
            console.log("something went wront in the repository layter");
            throw {error};
        }
    }


}

module.exports=FlightRepository;