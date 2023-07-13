const app = require("./app")
const connectDB = require("./database.js")
const dotenv = require("dotenv")

dotenv.config({path : "server/config/config"})
connectDB()

const server = app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`);

})
