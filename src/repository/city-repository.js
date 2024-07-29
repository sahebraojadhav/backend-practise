const { where, Op } = require("sequelize");
const { City } = require("../models/index");
const e = require("express");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("error creating city", error);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("error deleting city", error);
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("error occurd while deleting city");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getAllCities(filter) {
    //filter can be empty
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async createBulkCities(cities){
      if(!Array.isArray(cities)){
        return resizeBy.status(400).json({error:'Request body should be an array of cities'})
      }

      try{
        const cityData=cities.map((city)=>({name:city.name}));
        const createCities=await City.bulkCreate(cityData);
        res.status(201).json({"message":"created succesfully"});

      }catch(error){
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating cities' });
      }
  }
}

module.exports = CityRepository;
