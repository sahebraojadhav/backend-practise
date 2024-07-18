const express=require("express");
const {PORT}=require('./src/config/serverConfig');

const setupAndStartServer=async ()=>{
    const app=express();

    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
        console.log("hello js")
    })
}
setupAndStartServer();