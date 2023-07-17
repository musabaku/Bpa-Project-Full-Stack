const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Property = require("../models/propertyModel.js") 

exports.getAllProperty = catchAsyncErrors(async(req,res,next)=>{

  const property = await Property.find()

  res.status(200).json({
    success:true,
    property
  })
})

exports.createProperty = catchAsyncErrors(async(req,res,next)=>{

req.body.user = req.user.id

const property = await Property.create(req.body)
res.status(200).json({
  success:true,
  property
})
})