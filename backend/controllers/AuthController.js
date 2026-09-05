const User = require("../model/user");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
  try {
   
    const { email, password, username, createdAt } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

 
    

    // create new user
    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    // generate token
    const token = createSecretToken(user._id);

    // set cookie BEFORE sending response
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true if using HTTPS
      sameSite: "lax",
    });

    // send response once
    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
//login section 
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN EMAIL:", email);
    console.log("LOGIN PASSWORD:", password);

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    console.log("USER FOUND:", !!user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log("DB PASSWORD:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "Login successful",
      success: true,
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


//logout

module.exports.Logout= async(req,res)=>{
  try{
    res.clearCookie("token",{
      httpOnly:true,
      secure:false,
      sameSite:"lax",
    })
    return res.status(200).json({message:"logout Successfully" ,success:true,})
  }catch(error){
    console.error("logout error",error);
  }return res.status(500).json({message:"server error"});
}