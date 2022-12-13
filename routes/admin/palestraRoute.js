const express = require("express");
const router = express.Router();
const palestraController = require("../../controller/admin/palestraController");

router.get("/palestra/lst", palestraController.lst);
router.post("/palestra/lst", palestraController.filtro);

router.get("/palestra/add", palestraController.abreadd);
router.post("/palestra/add", palestraController.add);

router.get("/palestra/edt", palestraController.abreedt);
router.post("/palestra/edt", palestraController.edt);

router.get("/palestra/del", palestraController.del);

module.exports = router;
