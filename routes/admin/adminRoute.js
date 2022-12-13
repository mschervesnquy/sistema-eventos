const express = require("express");
const router = express.Router();
const adminController = require("../../controller/admin/adminController");
const upload = require("../../config/upload");

router.get("/admin/lst", adminController.lst);
router.post("/admin/lst", adminController.filtro);

router.get("/admin/add", adminController.abreadd);
router.post("/admin/add", upload.single("foto"), adminController.add);

router.get("/admin/edt/:id", adminController.abreedt);
router.post("/admin/edt/:id", upload.single("foto"), adminController.edt);

router.get("/admin/del/:id", adminController.del);

module.exports = router;
