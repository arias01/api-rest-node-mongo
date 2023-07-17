const { connection } = require("./database/connection")
const express  = require("express")
const cors = require("cors")

console.log("Hi, Is Running");

//database connection
connection();
const port=3900;
//creating node server
const app =express();

//Cors Configuration with midleware
app.use(cors());

//Converting body to js object auto
app.use(express.json());

//Creating routes

//Creating server en listening 
app.listen(port, ()=>{
    console.log(`App Running on port ${port}`)
});