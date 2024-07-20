const {CityService}=require("../services/index");

const cityService=new cityService();

const create=async(req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not bale to cre4ate a city',
            err:error
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted a city",
            err:{}
        })

    }catch(error){
        console.log(error);
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not bale to cre4ate a city',
            err:error
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted city',
            err:{}
        })

    }catch(error){
        console.log(error);
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not bale to get a city',
            err:error
        })
    }
}

//Patch=>/city/:id->req.body

const update=async(req,res)=>{

    try{
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Sucessfully featured a city",
            err:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not bale to update a city',
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}