const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Admin = require('../models/adminModel.js');
const ErrorHandler = require('../utils/errorHandler.js');
const sendToken = require("../utils/sendToken.js")

exports.adminLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler('Please Enter Email and Password', 400));
  }

  const admin = await Admin.findOne({ email }).select('+password');

  if (!admin) {
    return next(
      new ErrorHandler('Please Enter Correct Email and Password', 400)
    );
  }
  const isPasswordMatch = await Admin.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler('Invalid Email or Password', 400));
  }

  sendToken(admin,200,res)
});
