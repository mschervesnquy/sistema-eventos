const express = require("express");
const router = express.Router();
const patrocinioController = require("../../controller/admin/patrocinioController");

router.get("/patrocinio/lst", patrocinioController.lst);
router.post("/patrocinio/lst", patrocinioController.filtro);

router.get("/patrocinio/add", patrocinioController.abreadd);
router.post("/patrocinio/add", patrocinioController.add);

router.get("/patrocinio/edt", patrocinioController.abreedt);
router.post("/patrocinio/edt", patrocinioController.edt);

router.get("/patrocinio/del", patrocinioController.del);

module.exports = router;
