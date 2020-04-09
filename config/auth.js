// Connecting to Database

const mongo = require("mongo");
const mongoose = require("mongoose");


const db = process.env.MONGODB;
// const db ="mongodb+srv://kiran:kiran@cluster0-zrsby.mongodb.net/test?retryWrites=true&w=majority";
// const db = mongodb://heroku_nfr6vrvb:esfpt0vj80aofe7hqp144bs51r@ds239967.mlab.com:39967/heroku_nfr6vrvb

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