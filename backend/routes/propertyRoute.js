const express = require("express")
const {getAllProperty,createProperty} = require("../controllers/propertyController.js")
const router = express.Router()

router.route("/properties").get(getAllProperty)
router.route("/properties/new").post(createProperty)
