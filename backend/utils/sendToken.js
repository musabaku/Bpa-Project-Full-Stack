const sendToken =(user,statusCode,res)=>{

const token = user.getJWTToken();

const options = {
  expires: new Date(
    Date.now() + Number(process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
  ),

  httpOnly: true,
};


res.status(statusCode).cookies("token",token,options).json({
  user,
  success:true,
  token
})
}

module.exports = sendToken