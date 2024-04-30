const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("./middleware1.js");
const authModel = require('../models/authModel.js');

const refreshTokens = [];

const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};

const login = async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const auth = await authModel.findOne({ userName: userName, passWord: passWord });
    if (auth) {
      const accessToken = generateAccessToken(auth);
      const refreshToken = generateRefreshToken(auth);
      refreshTokens.push(refreshToken);
      res.json({
        id: auth._id,
        userName: auth.userName,
        isAdmin: auth.isAdmin,
        accessToken,
        refreshToken,
      });
    } else {
      res.status(400).json("Username or password incorrect!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const viewAuthModelData = async (req, res) => {
  try {
    const authData = await authModel.find();
    console.log("Authentication Model Data:", authData);
    res.status(200).json(authData); 
  } catch (error) {
    console.error("Error viewing authentication model data:", error);
    res.status(500).json({ message: "Internal Server Error" }); 
  }
};

const deleteAuthModelById = async (id) => {
  try {
    const deletedAuthModel = await authModel.findByIdAndDelete(id);
    if (deletedAuthModel) {
      res.status(200).json('delete sucess')
    }
    return deletedAuthModel;
  } catch (error) {
    console.error("Error deleting authentication model:", error);
    throw error;
  }
};


const registerUser = async (req, res) => {
  try {
      const { userName, email, passWord, isAdmin } = req.body; 
      const newUser = new authModel({
          userName,
          email,
          passWord,
          isAdmin,
          department,
          company,
          position
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); 
  } catch (error) {
      res.status(500).json({ message: error.message }); 
  }
};

const logout = (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
};

module.exports = { refreshToken, login, logout, registerUser, viewAuthModelData, deleteAuthModelById };
