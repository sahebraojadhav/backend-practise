const express=require("express");
const {PORT,SYNC_DB}=require('./src/config/serverConfig');
const bodyParser = require("body-parser");
const db=require('./src/models/index')
const CityRepository =require('./src/repository/city-repository');

const ApiRoutes=require('./src/routes/index')

const {Airport,City}=require('./src/models/index');
const { where } = require("sequelize");


console.log(PORT);

const setupAndStartServer=async ()=>{
    const app=express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`server is running at port ${PORT}`)
        console.log("hello js")
       const result=await City.findOne({
        where:{
            id:12
        }
       });
       console.log(result);
    })
}
setupAndStartServer();