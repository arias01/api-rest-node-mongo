const mongoose = require("mongoose");

const connection = async() => {

    try{

     await   mongoose.connect("mongodb://127.0.0.1:27017/mi_blog");

     console.log("Sucess Connection to the database");
    }catch(e){
        console.log(e);
        throw new Error("didn't get access to the database");

    }
}

module.exports ={
    connection
}