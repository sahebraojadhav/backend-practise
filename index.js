const express=require("express");
const {PORT}=require('./src/config/serverConfig');
const bodyParser = require("body-parser");

const setupAndStartServer=async ()=>{
    const app=express();

    app.use(bodyParser);
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
        console.log("hello js")
    })
}
setupAndStartServer();