const { where } = require('sequelize');
const {City}=require('../models/index'); 
const e = require('express');
const city = require('../models/city');

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

    async deleteCity({cityId}){
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

}

module.exports=CityRepository;