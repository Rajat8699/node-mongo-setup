const express = require("express");
const router = express.Router();

const { getUserMiddleware, loginMiddleware } = require("../middlewares/authMiddlewares");
const { getUserController, loginController } = require("../controllers/authController");

router.get("/", getUserMiddleware, getUserController);
router.post("/login", loginMiddleware, loginController)

module.exports = router;