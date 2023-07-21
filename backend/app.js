const express = require("express")
const cookieParser = require("cookie-parser")
const app = express();
const blog = require("./routes/blogRoute.js")
const property = require("./routes/propertyRoute.js")
const admin = require("./routes/adminRoute.js")
const errorMiddleware = require("./middlewares/error.js") 
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1",blog)
app.use("/api/v1",property)
app.use("/api/v1",admin)
app.use(errorMiddleware)
module.exports = app
