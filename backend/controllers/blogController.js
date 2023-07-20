const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const Blog = require("../models/blogModel.js")

exports.getAllBlog = catchAsyncErrors(async(req,res,next)=>{
  const blogs = await Blog.find()

  res.status(200).json({
    success:true,
    blogs
  })
})
exports.getBlogDetails = catchAsyncErrors(async(req,res,next)=>{
  
  const blogs = await Blog.find(req.params.id)

  res.status(200).json({
    success:true,
    blogs
  })
})
exports.updateBlog = catchAsyncErrors(async(req,res,next)=>{
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blog not found", 404));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(201).json({
    success: true,
    product,
  });
})
exports.deleteBlog = catchAsyncErrors(async(req,res,next)=>{
  const blogs = await Blog.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success:true,
    blogs
  })
})

exports.createBlog = catchAsyncErrors(async(req,res,next)=>{
  req.body.user = req.user.id;
  const blogs = await Blog.create(req.body)

  res.status(200).json({
    success:true,
    blogs
  })
})