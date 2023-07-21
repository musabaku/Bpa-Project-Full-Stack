const app = require("./app")
const connectDB = require("./database.js")
const dotenv = require("dotenv")

dotenv.config({path : "backend/config/.env"})
console.log("1")
connectDB()
console.log("2")

const server = app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`);

})
