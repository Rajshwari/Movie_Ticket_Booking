const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
require("dotenv").config();

mongoose.connect("mongodb+srv://rajeshwari:raju123@cluster0.zz68nrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connetion Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connetion Failed');
})