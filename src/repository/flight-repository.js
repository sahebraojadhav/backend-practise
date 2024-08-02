const { where,Op} = require("sequelize");
const { Flights } = require("../models/index");

class FlightRepository {

    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
           filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId
        }

       /* if(data.minPrice && data.maxPrice){
          Object.assign(filter,{
            [Op.and]:[{
              price:{[Op.lte]:data.maxPrice}},
              {price:{[Op.gte]:data.minPrice}}
          ]
          })
        }
        */

        let priceFilter=[];
        if(data.minPrice){
            //Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }

        if(data.maxPrice){
           //Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
           priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        return filter;
    }

  async createFlight(data) {
    try {
      console.log("data at flight repository", data);
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wront in the repository layter");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wront in the repository layter");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const filterObject=this.#createFilter(filter);
      const flight=await Flights.findAll({
        where:filterObject
      })
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter){
    try{
        const filterObject=this.#createFilter(filter);
        const flight=await Flights.findAll({where:filterObject});
        return flight;
    }catch(error){
        console.log("Somethign went wrong in te repository layer");
        throw {error};
    }
  }


}

module.exports = FlightRepository;

/*
    where:{
    arrivaAirportId:2,departureAirportId:4,
    price:{[Op.gte]:4000}
    }
*/