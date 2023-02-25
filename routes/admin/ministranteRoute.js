const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");
const upload = require("../../config/upload");

router.get("/ministrante/lst", ministranteController.lst);
router.post("/ministrante/lst", ministranteController.filtro);

router.get("/ministrante/add", ministranteController.abreadd);
router.post(
  "/ministrante/add",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  ministranteController.add
);

router.get("/ministrante/edt/:id", ministranteController.abreedt);
router.post(
  "/ministrante/edt/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  ministranteController.edt
);

router.get("/ministrante/del/:id", ministranteController.del);

module.exports = router;
