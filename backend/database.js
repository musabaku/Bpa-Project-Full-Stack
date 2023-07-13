const mongoose = require("mongoose")


const connectDataBase= ()=>{
  mongoose.connect((process.env.DB_URI),{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connected to MongoDB successfully`)
}).catch((err) => {
    console.log(err)
})
}

module.exports = connectDataBase
