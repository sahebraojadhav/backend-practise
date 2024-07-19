const { where } = require('sequelize');
const {City}=require('../models/index'); 
const e = require('express');

console.log("City",City);
class CityRepository{
    async createCity({name}){
        try{
            const city =await City.create({name});
            return city;
        }
        catch(error){
            console.log("error creating city",error);
            throw {error}
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            })
        }catch(error){
            console.log("error deleting city",error);
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        }
        catch(error){
            console.log("error occurd while deleting city");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer")
            throw(error);
        }
    }


}

module.exports=CityRepository;