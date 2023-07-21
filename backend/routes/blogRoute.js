const express = require('express');
const {
  getAllBlog,
  createBlog,
  getBlogDetails,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController.js');
const  isAuthenticated  = require("../middlewares/auth");

const router = express.Router();

router.route("/blog").get(getAllBlog)
router.route("/admin/blog/new").post(isAuthenticated,createBlog)
router.route("/admin/blog/:id").put(isAuthenticated,updateBlog).delete(isAuthenticated,deleteBlog)

router.route("/blog/:id").get(getBlogDetails)

module.exports = router;
