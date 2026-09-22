const User = require("../model/user");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

// SIGNUP
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // create new user (password will be hashed by pre-save hook in model)
    const user = await User.create({ email, password, username });

    // generate token
    const token = createSecretToken(user._id);

    // set cookie BEFORE sending response
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true if using HTTPS
      sameSite: "lax",
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// LOGIN
module.exports.Login = async (req, res) => {
  try {
    const { identifier, password } = req.body; 
    // frontend sends identifier (email or username)

    console.log("LOGIN IDENTIFIER:", identifier);
    console.log("LOGIN PASSWORD:", password);

    if (!identifier || !password) {
      return res.status(400).json({
        message: "Email/Username and password are required",
      });
    }

    // check if identifier is email or username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let user;

    if (emailRegex.test(identifier)) {
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ username: identifier });
    }

    console.log("USER FOUND:", !!user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

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
      user: { id: user._id, email: user.email, username: user.username }
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


// LOGOUT
module.exports.Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({ message: "Logout successfully", success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
