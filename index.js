const express=require("express");
const {PORT}=require('./src/config/serverConfig');
const bodyParser = require("body-parser");
const db=require('./src/models/index')
const CityRepository =require('./src/repository/city-repository');

const ApiRoutes=require('./src/routes/index')

console.log(PORT);

const setupAndStartServer=async ()=>{
    const app=express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
        console.log("hello js")
        const repo=new CityRepository();
       
    })
}
setupAndStartServer();