const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  image:{
    url{
    type:String,
    required:true,
    }
  },
  name:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
}

)

module.exports = mongoose.model("Property",propertySchema)