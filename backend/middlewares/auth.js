const jwt = require('jsonwebtoken');
const catchAsyncError = require('./catchasynerror');
const ErrorHandler = require('../utils/errorhandler');
const Admin = require('../models/AdminModel');

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler('Login to access this page', 400));
  }

  const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Admin.findById(decodedPayload.id);

  next();
});

module.exports = isAuthenticated;
