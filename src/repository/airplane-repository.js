const {Airplane} =require('../models/index');

console.log("hey guys airplaen talking from this side",Airplane);

class AirplaneRepository{
    async getAirplane(id){
        try{
            console.log("here is id of mine saheb",id);
            const airplane=await Airplane.findByPk(id);
            console.log("airplanessss",airplane);
            return airplane;
        }catch(error){
            console.log("sometihng went wrong in the repostiry layer")
            throw {error};
        }
    }
}

module.exports=AirplaneRepository; 