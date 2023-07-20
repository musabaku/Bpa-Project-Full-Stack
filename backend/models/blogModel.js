const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
name:{
  type:String,
  required:true
},
image:{
  url:{
    type:String,
    required:true
  }
}
})

module.exports = mongoose.model("Blog",blogSchema)