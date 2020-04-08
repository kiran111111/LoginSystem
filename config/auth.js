// Connecting to Database

const mongo = require("mongo");
const mongoose = require("mongoose");


const db = process.env.mongoURI;

const ConnectDB = async ()=>{
  try{
     await mongoose.connect(db,{
       useNewUrlParser:true,
       useUnifiedTopology:true
     })
     console.log(' Connected to Mongo Database ')
  }catch(err){
   console.log("Error occured in connecting to the database");
   process.exit(1);
  }
}

module.exports = ConnectDB;