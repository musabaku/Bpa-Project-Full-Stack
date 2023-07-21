const mongoose = require("mongoose")


const connectDataBase= ()=>{
console.log("3")

  mongoose.connect((process.env.MONGO_URI),{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("4")
    console.log(`Connected to MongoDB successfully`)
}).catch((err) => {
    console.log("4")

    console.log(err)
})
}

module.exports = connectDataBase
