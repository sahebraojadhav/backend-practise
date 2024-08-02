const { FlightRepository, AirplaneRepository } = require("../repository/index");

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

  async getFlightData() {}
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
