const { cityService } = require('.');
const { CityRepository } =require('../repository/index'); 

console.log('city servicess form services');
class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            const city=await this.CityRepository.createCity(data);
            return city;

        }catch(error){
            console.log("somethig went wrong at service layer line 15");
            throw(error)
        }
    }
    async deleteCity(cityId){
        try{
            const response=await this.CityRepository.deleteCity(cityId);
            return response; 

        }catch(error){
            console.log("somethig went wrong at service layer");
            throw(error)
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await this.CityRepository.updateCity(cityId,data)
            return city;
        }catch(error){
            console.log("somethig went wrong at service layer");
            throw(error)
        }
    }
    async getCity(cityId){
        try{
            const city=await this.CityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("somethig went wrong at service layer");
            throw(error)
        }
    }

    async getAllCities(filter){
        try{
            const cities=await this.CityRepository.getAllCities({name:filter.name});
            return cities;

        }catch(error){
            console.log("somethig went wrong at service layer");
            throw(error)
        }
    }

    async bulkCreateCities(data){
        try{
            console.log("loggging cities at service layer");
            console.log(data);
            const cities=await this.CityRepository.createBulkCities(data);
            return cities
        }catch(error){
            console.log("something is happend at service layer");
            throw(error);
        }
    }
}

module.exports=CityService;