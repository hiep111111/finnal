// routes.js
const express = require("express");
const { verify } = require("../controllers/middleware1");
const { deleteUser } = require("../controllers/userController1");
const { refreshToken, login, logout, registerUser, viewAuthModelData, deleteAuthModelById, viewAuthModelDatabyID} = require("../controllers/authController");

const router = express.Router();

router.delete("/delete/:id", deleteAuthModelById);
router.get("/get", viewAuthModelData);
router.get("/get/:id", viewAuthModelDatabyID);
router.post("/register", registerUser);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.delete("/users/:userId", verify, deleteUser);
router.post("/logout", verify, logout);

module.exports = router;
