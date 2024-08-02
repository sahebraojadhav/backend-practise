const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compairTime}=require('../util/helper')


console.log(FlightRepository,AirplaneRepository);

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
    
    console.log(this.flightRepository);
    console.log(this.airplaneRepository);
  }

  async createFlight(data) {
    try {
      if(!compairTime(data.arrivalTime,data.departureTime)){
        throw {error:'arrival time cannot be grether than departure time'}
      }

      console.log("dataaaaaaaaa",data)
      console.log("airplaneeeeeee id",data.airplaneId);
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      console.log("capicityyyyyyyyy",airplane.capicity)
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeates: airplane.capicity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }

  async getFlightData(data) {
    try{
      const flights=await this.flightRepository.getAllFlights(data);
      return flights;
    }catch(error){
      console.log("soemting went wrong at servive layer");
      throw {error}
    }
  }
}

/*{
    flightNumber,
    airplaneId,
    deprartureAirportId,
    arrivalAiriportId,
    arrivalTime,
    departureTime,
    price ,
    toatalSeats
}*/
module.exports = FlightService;
