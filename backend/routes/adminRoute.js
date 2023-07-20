const express = require('express');
const {
  adminLogin
} = require('../controllers/adminController.js');
const router = express.Router();


router.route("/admin/login").post(adminLogin)