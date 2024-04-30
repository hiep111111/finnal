const jwt = require("jsonwebtoken");

const generateAccessToken = (authModel) => {
  return jwt.sign({ email: authModel.email,  isAdmin: authModel.isAdmin }, "mySecretKey", {
    expiresIn: "100s",
  });
};

const generateRefreshToken = (authModel) => {
  return jwt.sign({email: authModel.email, isAdmin: authModel.isAdmin}, "myRefreshSecretKey");
};

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, authModel) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.authModel = authModel;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

module.exports = { generateAccessToken, generateRefreshToken, verify };
