const express = require("express");
const router = express.Router();
const oficinaController = require("../../controller/admin/oficinaController");

router.get("/oficina/lst", oficinaController.lst);
router.post("/oficina/lst", oficinaController.filtro);

router.get("/oficina/add", oficinaController.abreadd);
router.post("/oficina/add", oficinaController.add);

router.get("/oficina/edt", oficinaController.abreedt);
router.post("/oficina/edt", oficinaController.edt);

router.get("/oficina/del", oficinaController.del);

module.exports = router;
