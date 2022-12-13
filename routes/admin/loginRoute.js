const express = require("express");
const router = express.Router();
const loginController = require("../../controller/admin/loginController");

router.get("/", loginController.abretela);
router.post("/", loginController.logar);

module.exports = router;
