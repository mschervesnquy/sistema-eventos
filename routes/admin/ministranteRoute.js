const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");

router.get("/ministrante/lst", ministranteController.lst);
router.post("/ministrante/lst", ministranteController.filtro);

router.get("/ministrante/add", ministranteController.abreadd);
router.post("/ministrante/add", ministranteController.add);

router.get("/ministrante/edt", ministranteController.abreedt);
router.post("/ministrante/edt", ministranteController.edt);

router.get("/ministrante/del", ministranteController.del);

module.exports = router;
